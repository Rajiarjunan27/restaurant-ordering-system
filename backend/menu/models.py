from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="categories/", blank=True, null=True)
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "name"]

    def __str__(self):
        return self.name


class FoodItem(models.Model):
    VEG_CHOICES = (
        ("VEG", "Veg"),
        ("NON_VEG", "Non Veg"),
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="food_items"
    )

    name = models.CharField(max_length=150)
    description = models.TextField(blank=True)

    price = models.DecimalField(
        max_digits=8,
        decimal_places=2
    )

    image = models.ImageField(
        upload_to="food_items/",
        blank=True,
        null=True
    )

    veg_type = models.CharField(
        max_length=10,
        choices=VEG_CHOICES,
        default="NON_VEG"
    )

    preparation_time = models.PositiveIntegerField(default=20)

    is_available = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name