from django.urls import path, include
from rest_framework import routers
from .views import StoreView, GamesView, CategoriaView, CarritoView, register_user, user_logout, user_login
from rest_framework.documentation import include_docs_urls
router = routers.DefaultRouter()
router.register(r'store', StoreView, 'store')
router.register(r'games', GamesView, 'games')
router.register(r'categoria', CategoriaView, 'categoria')
router.register(r'carrito', CarritoView, 'carrito')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Store documentation")),
    path('api/register/', register_user, name='register_user'),
    path('api/logout/', user_logout, name='user_logout'),
    path('api/login/', user_login, name='user_login'),

]
