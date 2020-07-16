from django.contrib import admin

from .models import ComedyRealMovie, ComedyThrillerMovie

admin.site.register(ComedyThrillerMovie)
admin.site.register(ComedyRealMovie)
