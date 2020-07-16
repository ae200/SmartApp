from django.contrib import admin

# Register your models here.

from .models import ActionThrillerMovie, AdventureThrillerMovie, ComedyThrillerMovie, DramaThrillerMovie, FictionThrillerMovie, HistoricalThrillerMovie, ActionRealMovie, AdventureRealMovie, ComedyRealMovie, DramaRealMovie, FictionRealMovie, HistoricalRealMovie

admin.site.register(ActionThrillerMovie)
admin.site.register(ActionRealMovie)
admin.site.register(AdventureThrillerMovie)
admin.site.register(AdventureRealMovie)
admin.site.register(ComedyThrillerMovie)
admin.site.register(ComedyRealMovie)
admin.site.register(DramaThrillerMovie)
admin.site.register(DramaRealMovie)
admin.site.register(FictionThrillerMovie)
admin.site.register(FictionRealMovie)
admin.site.register(HistoricalThrillerMovie)
admin.site.register(HistoricalRealMovie)

