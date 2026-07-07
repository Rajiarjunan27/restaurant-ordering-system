from django.db import models
from accounts.models import User
from menu.models import FoodItem


class Cart(models.Model):
    customer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="carts"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cart - {self.customer.username}"



class CartItem(models.Model):
    cart = models.ForeignKey(
        Cart,
        on_delete=models.CASCADE,
        related_name="cart_items"
    )

    food_item = models.ForeignKey(
        FoodItem,
        on_delete=models.CASCADE
    )

    quantity = models.PositiveIntegerField(default=1)

    price = models.DecimalField(
        max_digits=8,
        decimal_places=2
    )

    subtotal = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    def __str__(self):
        return f"{self.food_item.name} x {self.quantity}"
    

class Order(models.Model):

     PAYMENT_METHODS = (
        ("COD", "Cash On Delivery"),
        ("PAY_AT_RESTAURANT", "Pay At Restaurant"),
    )

     ORDER_TYPES = (
        ("DELIVERY", "Delivery"),
        ("TAKEAWAY", "Takeaway"),
        ("DINE_IN", "Dine In"),
    )

     ORDER_STATUS = (
        ("NEW", "New"),
        ("ACCEPTED", "Accepted"),
        ("PREPARING", "Preparing"),
        ("READY", "Ready"),
        ("DELIVERED", "Delivered"),
        ("CANCELLED", "Cancelled"),
    )

     customer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="orders"
    )

     order_number = models.CharField(
        max_length=20,
        unique=True
    )

     subtotal = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

     delivery_charge = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        default=0
    )

     grand_total = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

     payment_method = models.CharField(
        max_length=20,
        choices=PAYMENT_METHODS,
        default="COD"
    )

     payment_status = models.BooleanField(default=False)

     order_type = models.CharField(
        max_length=20,
        choices=ORDER_TYPES,
        default="DELIVERY"
    )

     order_status = models.CharField(
        max_length=20,
        choices=ORDER_STATUS,
        default="NEW"
    )

     notes = models.TextField(blank=True)

     created_at = models.DateTimeField(auto_now_add=True)

     updated_at = models.DateTimeField(auto_now=True)

     def __str__(self):
        return self.order_number
     
class OrderItem(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name="order_items"
    )

    food_item = models.ForeignKey(
        FoodItem,
        on_delete=models.CASCADE
    )

    quantity = models.PositiveIntegerField(default=1)

    price = models.DecimalField(
        max_digits=8,
        decimal_places=2
    )

    subtotal = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    def __str__(self):
        return f"{self.food_item.name} x {self.quantity}"
class DeliveryAddress(models.Model):

    order = models.OneToOneField(
        Order,
        on_delete=models.CASCADE,
        related_name="delivery_address"
    )

    full_name = models.CharField(max_length=100)

    phone_number = models.CharField(max_length=15)

    address_line = models.TextField()

    city = models.CharField(max_length=100)

    state = models.CharField(max_length=100)

    pincode = models.CharField(max_length=10)

    landmark = models.CharField(
        max_length=150,
        blank=True
    )

    def __str__(self):
        return f"{self.full_name} - {self.city}"