from rest_framework import serializers
from .models import Producto
from .models import Games
from .models import Categoria
from .models import CarritoItem


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'


class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = '__all__'


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'


class CarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarritoItem
        fields = '__all__'
