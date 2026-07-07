from django.urls import path
from .views import CartView, AddToCartView,UpdateCartItemView
from .views import RemoveCartItemView
from .views import PlaceOrderView
urlpatterns = [
    path("cart/", CartView.as_view(), name="cart"),
    path("cart/add/", AddToCartView.as_view(), name="add-cart"),
    path(
    "cart/update/<int:cart_item_id>/",
    UpdateCartItemView.as_view(),
    name="update-cart",
),
    path(
    "cart/remove/<int:cart_item_id>/",
    RemoveCartItemView.as_view(),
    name="remove-cart",
),
path(
    "orders/place/",
    PlaceOrderView.as_view(),
    name="place-order",
),

]