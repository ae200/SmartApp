from django.contrib import admin

# Register your models here.
from .models import AdventureThrillerMovie, AdventureRealMovie

admin.site.register(AdventureThrillerMovie)
admin.site.register(AdventureRealMovie)