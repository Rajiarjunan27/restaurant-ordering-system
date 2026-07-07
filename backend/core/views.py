from rest_framework import viewsets
from .models import RestaurantSettings
from .serializers import RestaurantSettingsSerializer


class RestaurantSettingsViewSet(viewsets.ModelViewSet):
    queryset = RestaurantSettings.objects.all()
    serializer_class = RestaurantSettingsSerializer