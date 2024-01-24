from django.contrib import admin
from .models import Producto
from .models import Games
from .models import Categoria
from .models import CarritoItem

# Register your models here.

admin.site.register(Producto)
admin.site.register(Games)
admin.site.register(Categoria)
admin.site.register(CarritoItem)
