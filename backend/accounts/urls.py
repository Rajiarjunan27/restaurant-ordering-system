from django.urls import path

from .views import RegisterView, ProfileView, ForgotPasswordView

urlpatterns = [
    path("auth/register/", RegisterView.as_view(), name="register"),
    path("auth/profile/", ProfileView.as_view(), name="profile"),
     path("auth/forgot-password/", ForgotPasswordView.as_view(), name="forgot-password"),
]