from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from smartapp.mixins import MemberRequiredMixin

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework.authentication import TokenAuthentication
from dramareal.models import DramaRealMovie

from .serializers import DramaRealMovieSerializer, DramaRealMovieDetailSerializer


class DramaRealMovieList(generics.ListAPIView):
    queryset                = DramaRealMovie.objects.all()
    serializer_class        = DramaRealMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = DramaRealMovie.objects.search(query)
        else:
           qs = DramaRealMovie.objects.all()
        return qs 
     


class DramaRealMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = DramaRealMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return DramaRealMovie.objects.all()


class DramaRealMovieFeatured(generics.ListAPIView):
    serializer_class        = DramaRealMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = DramaRealMovie.objects.featured().search(query)
        else:   
           qs = DramaRealMovie.objects.featured()
        return qs    
