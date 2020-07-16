from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework.authentication import TokenAuthentication

from smartapp.mixins import MemberRequiredMixin

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from comedymovies.models import ComedyThrillerMovie, ComedyRealMovie

from .serializers import ComedyThrillerMovieSerializer, ComedyThrillerMovieDetailSerializer, ComedyRealMovieSerializer, ComedyRealMovieDetailSerializer

class ComedyThrillerMovieList(generics.ListAPIView):
    queryset                = ComedyThrillerMovie.objects.all()
    serializer_class        = ComedyThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = ComedyThrillerMovie.objects.search(query)
        else:
           qs = ComedyThrillerMovie.objects.all()
        return qs 
     


class ComedyThrillerMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = ComedyThrillerMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return ComedyThrillerMovie.objects.all()


class ComedyThrillerMovieFeatured(generics.ListAPIView):
    serializer_class        = ComedyThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = ComedyThrillerMovie.objects.featured().search(query)
        else:   
           qs = ComedyThrillerMovie.objects.featured()
        return qs    



class ComedyRealMovieList(generics.ListAPIView):
    queryset                = ComedyRealMovie.objects.all()
    serializer_class        = ComedyRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = ComedyRealMovie.objects.search(query)
        else:
           qs = ComedyRealMovie.objects.all()
        return qs 
     


class ComedyRealMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = ComedyRealMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]     


    def get_queryset(self):
        return ComedyRealMovie.objects.all()


class ComedyRealMovieFeatured(generics.ListAPIView):
    serializer_class        = ComedyRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = ComedyRealMovie.objects.featured().search(query)
        else:   
           qs = ComedyRealMovie.objects.featured()
        return qs    
