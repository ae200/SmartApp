from django.contrib import admin

from .models import HistoricalThrillerMovie, HistoricalRealMovie

admin.site.register(HistoricalThrillerMovie)
admin.site.register(HistoricalRealMovie)
