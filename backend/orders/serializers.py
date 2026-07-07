from rest_framework import serializers
from .models import Cart, CartItem,Order,DeliveryAddress,OrderItem

class CartItemSerializer(serializers.ModelSerializer):
    food_name = serializers.CharField(source="food_item.name", read_only=True)
    food_price = serializers.DecimalField(
        source="food_item.price",
        max_digits=10,
        decimal_places=2,
        read_only=True
    )

    class Meta:
        model = CartItem
        fields = (
            "id",
            "food_item",
            "food_name",
            "food_price",
            "quantity",
        )
class CartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True, read_only=True)
    class Meta:
        model = Cart
        fields = (
            "id",
            "customer",
            "cart_items",
            "created_at",
            "updated_at",
        )
class AddToCartSerializer(serializers.Serializer):
    food_item = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)

class UpdateCartItemSerializer(serializers.Serializer):
    quantity = serializers.IntegerField(min_value=1)

class PlaceOrderSerializer(serializers.Serializer):

    payment_method = serializers.ChoiceField(
        choices=["COD", "PAY_AT_RESTAURANT"]
    )

    order_type = serializers.ChoiceField(
        choices=["DELIVERY", "TAKEAWAY", "DINE_IN"]
    )

    notes = serializers.CharField(
        required=False,
        allow_blank=True
    )

    full_name = serializers.CharField()

    phone_number = serializers.CharField()

    address_line = serializers.CharField()

    city = serializers.CharField()

    state = serializers.CharField()

    pincode = serializers.CharField()

    landmark = serializers.CharField(
        required=False,
        allow_blank=True
    )

class OrderHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = [
            "id",
            "order_number",
            "grand_total",
            "created_at",
        ]
class OrderItemSerializer(serializers.ModelSerializer):
    food_name = serializers.CharField(
        source="food_item.name",
        read_only=True
    )

    class Meta:
         model = OrderItem
         fields = [
            "id",
            "food_name",
            "quantity",
            "price",
            "subtotal",
        ]
class DeliveryAddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = DeliveryAddress
        fields = [
            "full_name",
            "phone_number",
            "address_line",
            "city",
            "state",
            "pincode",
            "landmark",
        ]
class OrderDetailsSerializer(serializers.ModelSerializer):

    items = OrderItemSerializer(
        source="order_items",
        many=True,
        read_only=True
    )

    delivery_address = DeliveryAddressSerializer(
        read_only=True
    )

    class Meta:
        model = Order
        fields = [
            "id",
            "order_number",
            "order_status",
            "payment_method",
            "order_type",
            "subtotal",
            "delivery_charge",
            "grand_total",
            "notes",
            "created_at",
            "items",
            "delivery_address",
        ]

class AdminOrderSerializer(serializers.ModelSerializer):

    customer_name = serializers.CharField(
        source="customer.username",
        read_only=True
    )

    class Meta:
        model = Order
        fields = [
            "id",
            "order_number",
            "customer_name",
            "grand_total",
            "order_status",
            "payment_method",
            "order_type",
            "created_at",
        ]
class UpdateOrderStatusSerializer(serializers.Serializer):
    order_status = serializers.ChoiceField(
        choices=Order.ORDER_STATUS
    )