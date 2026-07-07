from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from menu.models import FoodItem
from .serializers import AddToCartSerializer
from .serializers import UpdateCartItemSerializer
from decimal import Decimal
from django.utils import timezone
from .serializers import CartSerializer
from .serializers import OrderHistorySerializer 
from .serializers import OrderDetailsSerializer
from .serializers import AdminOrderSerializer
from .serializers import UpdateOrderStatusSerializer


from .models import (
    Cart,
    CartItem,
    Order,
    OrderItem,
    DeliveryAddress,
)  

from .serializers import PlaceOrderSerializer


class CartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cart, created = Cart.objects.get_or_create(
            customer=request.user
        )

        serializer = CartSerializer(cart)
        return Response(serializer.data)
    
class AddToCartView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = AddToCartSerializer(data=request.data)

        if serializer.is_valid():
            cart, created = Cart.objects.get_or_create(
                customer=request.user
            )

            food = FoodItem.objects.get(
                id=serializer.validated_data["food_item"]
            )

            quantity = serializer.validated_data["quantity"]

            cart_item, created = CartItem.objects.get_or_create(
               cart=cart,
               food_item=food,
               defaults={
               "quantity": quantity,
                "price": food.price,
                 "subtotal": food.price * quantity,
                 }
            )

            if not created:
                    cart_item.quantity += quantity
                    cart_item.subtotal = cart_item.price * cart_item.quantity
                    cart_item.save()

            return Response(
                {
                    "message": "Item added to cart."
                }
            )

        return Response(serializer.errors, status=400)
class UpdateCartItemView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, cart_item_id):
        serializer = UpdateCartItemSerializer(data=request.data)

        if serializer.is_valid():
            try:
                cart_item = CartItem.objects.get(
                    id=cart_item_id,
                    cart__customer=request.user
                )

                quantity = serializer.validated_data["quantity"]

                cart_item.quantity = quantity
                cart_item.subtotal = cart_item.price * quantity
                cart_item.save()

                return Response({
                    "message": "Cart updated successfully."
                })

            except CartItem.DoesNotExist:
                return Response(
                    {"error": "Cart item not found."},
                    status=404
                )

        return Response(serializer.errors, status=400)
    

class RemoveCartItemView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, cart_item_id):
        try:
            cart_item = CartItem.objects.get(
                id=cart_item_id,
                cart__customer=request.user
            )

            cart_item.delete()

            return Response(
                {"message": "Item removed successfully."},
                status=200
            )

        except CartItem.DoesNotExist:
            return Response(
                {"error": "Cart item not found."},
                status=404
            )
class PlaceOrderView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        
        serializer = PlaceOrderSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=400)

        cart = Cart.objects.get(customer=request.user)
        cart_items = CartItem.objects.filter(cart=cart)

        if not cart_items.exists():
            return Response(
                {"error": "Cart is empty."},
                status=400
            )
        subtotal = Decimal("0.00")

      

        for item in cart_items:
              subtotal += item.subtotal

        delivery_charge = Decimal("0.00")
        grand_total = subtotal + delivery_charge

        order = Order.objects.create(
            customer=request.user,
            order_number=f"ORD{timezone.now().strftime('%Y%m%d%H%M%S')}",
            subtotal=subtotal,
            delivery_charge=delivery_charge,
            grand_total=grand_total,
            payment_method=serializer.validated_data["payment_method"],
            order_type=serializer.validated_data["order_type"],
            notes=serializer.validated_data["notes"],
        )
        for item in cart_items:
         OrderItem.objects.create(
         order=order,
        food_item=item.food_item,
        quantity=item.quantity,
        price=item.price,
        subtotal=item.subtotal,
    )
        DeliveryAddress.objects.create(
    order=order,
    full_name=serializer.validated_data["full_name"],
    phone_number=serializer.validated_data["phone_number"],
    address_line=serializer.validated_data["address_line"],
    city=serializer.validated_data["city"],
    state=serializer.validated_data["state"],
    pincode=serializer.validated_data["pincode"],
    landmark=serializer.validated_data["landmark"],
)
        cart_items.delete()

        return Response(
    {
        "message": "Order placed successfully.",
        "order_number": order.order_number,
        "grand_total": order.grand_total,
    },
    status=201
)
    
class OrderHistoryView(APIView):
     permission_classes = [IsAuthenticated]

     def get(self, request):
        orders = Order.objects.filter(
            customer=request.user
        ).order_by("-created_at")

        serializer = OrderHistorySerializer(
            orders,
            many=True
        )

        return Response(serializer.data)
class OrderDetailsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, order_id):
        try:
            order = Order.objects.get(
                id=order_id,
                customer=request.user
            )

            serializer = OrderDetailsSerializer(order)

            return Response(serializer.data)

        except Order.DoesNotExist:
            return Response(
                {"error": "Order not found."},
                status=404
            )
class AdminOrderListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        if not request.user.is_staff:
            return Response(
                {"error": "Permission denied"},
                status=403
            )

        orders = Order.objects.all().order_by("-created_at")

        serializer = AdminOrderSerializer(
            orders,
            many=True
        )

        return Response(serializer.data)
    
class AdminOrderDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, order_id):

        if not request.user.is_staff:
            return Response(
                {"error": "Permission denied"},
                status=403
            )

        try:
            order = Order.objects.get(id=order_id)

            serializer = OrderDetailsSerializer(order)

            return Response(serializer.data)

        except Order.DoesNotExist:
            return Response(
                {"error": "Order not found"},
                status=404
            )
        
class UpdateOrderStatusView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, order_id):

        if not request.user.is_staff:
            return Response(
                {"error": "Permission denied"},
                status=403
            )

        try:
            order = Order.objects.get(id=order_id)

            serializer = UpdateOrderStatusSerializer(
                data=request.data
            )

            if serializer.is_valid():
                order.order_status = serializer.validated_data["order_status"]
                order.save()

                return Response({
                    "message": "Order status updated successfully.",
                    "order_status": order.order_status
                })

            return Response(serializer.errors, status=400)

        except Order.DoesNotExist:
            return Response(
                {"error": "Order not found"},
                status=404
            )