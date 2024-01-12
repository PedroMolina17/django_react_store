from django.db import models

# Create your models here.


class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    en_stock = models.IntegerField(default=0)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.ImageField(
        upload_to='producto_imagenes/', blank=True, null=True)

    def __str__(self):
        return self.nombre


class Games(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    en_stock = models.IntegerField(default=0)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.ImageField(
        upload_to='producto_imagenes/', blank=True, null=True)

    def __str__(self):
        return self.nombre
