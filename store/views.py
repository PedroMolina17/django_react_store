from rest_framework import viewsets
from .serializer import StoreSerializer, GamesSerializer
from .models import Producto
from .models import Games
# Create your views here.


class StoreView(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Producto.objects.all()


class GamesView(viewsets.ModelViewSet):
    serializer_class = GamesSerializer
    queryset = Games.objects.all()
