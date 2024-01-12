from rest_framework import serializers
from .models import Producto
from .models import Games


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'


class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = '__all__'
