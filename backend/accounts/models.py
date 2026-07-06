from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    ROLE_CHOICES = (
        ("ADMIN", "Admin"),
        ("CUSTOMER", "Customer"),
    )

    full_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15, unique=True)
    role = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES,
        default="CUSTOMER"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username

