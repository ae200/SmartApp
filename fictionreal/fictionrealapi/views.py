from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from smartapp.mixins import MemberRequiredMixin

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets
from rest_framework.response import Response

from fictionreal.models import FictionRealMovie

from .serializers import FictionRealMovieSerializer, FictionRealMovieDetailSerializer


class FictionRealMovieList(generics.ListAPIView):
    queryset                = FictionRealMovie.objects.all()
    serializer_class        = FictionRealMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = FictionRealMovie.objects.search(query)
        else:
           qs = FictionRealMovie.objects.all()
        return qs 
     


class FictionRealMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = FictionRealMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return FictionRealMovie.objects.all()


class FictionRealMovieFeatured(generics.ListAPIView):
    serializer_class        = FictionRealMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = FictionRealMovie.objects.featured().search(query)
        else:   
           qs = FictionRealMovie.objects.featured()
        return qs    

