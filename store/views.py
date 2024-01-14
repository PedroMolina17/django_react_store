from rest_framework import viewsets
from .serializer import StoreSerializer, GamesSerializer, CategoriaSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Producto
from .models import Games
from .models import Categoria
# Create your views here.


class StoreView(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Producto.objects.all()

    @action(detail=False, methods=['GET'])
    def get_by_categoria(self, request):
        categoria_id = request.GET.get('categoria_id')
        if categoria_id:
            productos = Producto.objects.filter(categoria=categoria_id)
        else:
            productos = Producto.objects.all()

        serializer = StoreSerializer(productos, many=True)
        return Response(serializer.data)


class GamesView(viewsets.ModelViewSet):
    serializer_class = GamesSerializer
    queryset = Games.objects.all()


class CategoriaView(viewsets.ModelViewSet):
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()
