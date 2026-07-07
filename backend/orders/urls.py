from django.urls import path
from .views import CartView, AddToCartView,UpdateCartItemView
from .views import RemoveCartItemView
from .views import PlaceOrderView
from .views import OrderHistoryView
from .views import OrderDetailsView
from .views import AdminOrderListView
from .views import AdminOrderDetailView
from .views import UpdateOrderStatusView


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
path(
    "orders/history/",
    OrderHistoryView.as_view(),
    name="order-history",
),
path(
    "orders/<int:order_id>/",
    OrderDetailsView.as_view(),
    name="order-details",
),path(
    "admin/orders/",
    AdminOrderListView.as_view(),
    name="admin-order-list",
),
path(
    "admin/orders/<int:order_id>/",
    AdminOrderDetailView.as_view(),
    name="admin-order-detail",
),
path(
    "admin/orders/<int:order_id>/status/",
    UpdateOrderStatusView.as_view(),
    name="update-order-status",
),

]