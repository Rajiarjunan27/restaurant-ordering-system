from django.db import models


class RestaurantSettings(models.Model):
    restaurant_name = models.CharField(max_length=150)

    logo = models.ImageField(
        upload_to="restaurant/",
        blank=True,
        null=True
    )

    phone_number = models.CharField(max_length=15)

    whatsapp_number = models.CharField(max_length=15)

    email = models.EmailField(blank=True)

    address = models.TextField()

    opening_time = models.TimeField()

    closing_time = models.TimeField()

    delivery_charge = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        default=0
    )

    minimum_order = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        default=0
    )

    gst_percentage = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        default=0
    )

    is_open = models.BooleanField(default=True)

    def __str__(self):
        return self.restaurant_name