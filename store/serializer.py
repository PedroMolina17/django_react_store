from rest_framework import serializers
from .models import Producto
from .models import Games
from .models import Categoria


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
