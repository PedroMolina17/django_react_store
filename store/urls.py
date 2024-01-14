from django.urls import path, include
from rest_framework import routers
from .views import StoreView, GamesView, CategoriaView
from rest_framework.documentation import include_docs_urls
router = routers.DefaultRouter()
router.register(r'store', StoreView, 'store')
router.register(r'games', GamesView, 'games')
router.register(r'categoria', CategoriaView, 'categoria')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Store documentation"))

]
