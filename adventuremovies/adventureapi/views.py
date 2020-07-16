from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from rest_framework.authentication import TokenAuthentication
from smartapp.mixins import MemberRequiredMixin
from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets
from rest_framework.response import Response

from adventuremovies.models import AdventureThrillerMovie, AdventureRealMovie

from .serializers import AdventureThrillerMovieSerializer, AdventureThrillerMovieDetailSerializer, AdventureRealMovieSerializer, AdventureRealMovieDetailSerializer

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





class AdventureRealMovieList(generics.ListAPIView):
    queryset                = AdventureRealMovie.objects.all()
    serializer_class        = AdventureRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = AdventureRealMovie.objects.search(query)
        else:
           qs = AdventureRealMovie.objects.all()
        return qs 
     


class AdventureRealMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = AdventureRealMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]     


    def get_queryset(self):
        return AdventureRealMovie.objects.all()


class AdventureRealMovieFeatured(generics.ListAPIView):
    serializer_class        = AdventureRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = AdventureRealMovie.objects.featured().search(query)
        else:   
           qs = AdventureRealMovie.objects.featured()
        return qs    

