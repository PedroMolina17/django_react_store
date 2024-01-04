from django.urls import path, include
from rest_framework import routers
from .views import StoreView

router = routers.DefaultRouter()
router.register(r'store', StoreView, 'store')

urlpatterns = [
    path("api/v1/", include(router.urls))
]
