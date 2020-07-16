from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from rest_framework.authentication import TokenAuthentication

from smartapp.mixins import MemberRequiredMixin

from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets
from rest_framework.response import Response

from adventurethriller.models import AdventureThrillerMovie

from .serializers import AdventureThrillerMovieSerializer, AdventureThrillerMovieDetailSerializer

class AdventureThrillerMovieList(generics.ListAPIView):
    queryset                = AdventureThrillerMovie.objects.all()
    serializer_class        = AdventureThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = AdventureThrillerMovie.objects.search(query)
        else:
           qs = AdventureThrillerMovie.objects.all()
        return qs 
     


class AdventureThrillerMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = AdventureThrillerMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return AdventureMovie.objects.all()


class AdventureThrillerMovieFeatured(generics.ListAPIView):
    serializer_class        = AdventureThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = AdventureThrillerMovie.objects.featured().search(query)
        else:   
           qs = AdventureThrillerMovie.objects.featured()
        return qs    

