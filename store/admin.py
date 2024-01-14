from django.contrib import admin
from .models import Producto
from .models import Games
from .models import Categoria

# Register your models here.

admin.site.register(Producto)
admin.site.register(Games)
admin.site.register(Categoria)
