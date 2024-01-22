from rest_framework import viewsets
from .serializer import StoreSerializer, GamesSerializer, CategoriaSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Producto
from .models import Games
from .models import Categoria
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt


from django.views.decorators.csrf import csrf_exempt


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


class CategoriaView(viewsets.ModelViewSet):
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()
