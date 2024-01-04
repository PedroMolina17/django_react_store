from rest_framework import viewsets
from .serializer import StoreSerializer
from .models import Producto
# Create your views here.


class StoreView(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Producto.objects.all()
