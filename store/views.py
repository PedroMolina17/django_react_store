from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .serializer import StoreSerializer, GamesSerializer, CategoriaSerializer, CarritoSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Producto
from .models import Games
from .models import Categoria
from .models import CarritoItem
from rest_framework.views import APIView


@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)

    if user:
        login(request, user)
        return Response({'message': 'Inicio de sesión exitoso', 'username': user.username}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@login_required
def user_logout(request):
    logout(request)
    return Response({'message': 'Cierre de sesión exitoso'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def register_user(request):
    print(request.data)
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')
        is_admin = request.data.get('is_admin', False)
        username = request.data.get('username') or email

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        if is_admin:
            user.is_staff = True
            user.save()
        return Response({'message': 'Usuario registrado exitosamente'}, status=status.HTTP_201_CREATED)


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


class CarritoView(viewsets.ModelViewSet):
    serializer_class = CarritoSerializer
    queryset = CarritoItem.objects.all()


class CategoriaView(viewsets.ModelViewSet):
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()


class CarritoAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # Obtener datos del cuerpo de la solicitud
        producto_id = request.data.get('producto')
        cantidad = request.data.get('cantidad')
        usuario = request.user  # Supongo que estás autenticando usuarios

        # Validar datos recibidos
        if not producto_id or not cantidad or not usuario:
            return Response({'error': 'Datos incompletos'}, status=status.HTTP_400_BAD_REQUEST)

        # Lógica para agregar un elemento al carrito
        try:
            carrito_item = CarritoItem.objects.create(
                producto_id=producto_id,
                cantidad=cantidad,
                usuario=usuario
            )
            serializer = CarritoSerializer(carrito_item)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, *args, **kwargs):
        item_id = kwargs.get('item_id')

        # Validar si el elemento existe
        try:
            carrito_item = CarritoItem.objects.get(
                id=item_id, usuario=request.user)
        except CarritoItem.DoesNotExist:
            return Response({'error': 'Elemento no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        carrito_item.delete()
        return Response({'message': 'Elemento eliminado correctamente'}, status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, *args, **kwargs):
        item_id = kwargs.get('item_id')
        nueva_cantidad = request.data.get('cantidad')

        try:
            carrito_item = CarritoItem.objects.get(
                id=item_id, usuario=request.user)
        except CarritoItem.DoesNotExist:
            return Response({'error': 'Elemento no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        # Validar la nueva cantidad
        if nueva_cantidad is None:
            return Response({'error': 'Cantidad no proporcionada'}, status=status.HTTP_400_BAD_REQUEST)

        # Lógica para actualizar la cantidad de un elemento en el carrito
        carrito_item.cantidad = nueva_cantidad
        carrito_item.save()

        serializer = CarritoSerializer(carrito_item)
        return Response(serializer.data, status=status.HTTP_200_OK)
