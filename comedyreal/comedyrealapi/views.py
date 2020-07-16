from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework.authentication import TokenAuthentication

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from smartapp.mixins import MemberRequiredMixin

from comedymovies.models import ComedyRealMovie

from .serializers import ComedyRealMovieSerializer, ComedyRealMovieDetailSerializer


class ComedyRealMovieList(generics.ListAPIView):
    queryset                = ComedyRealMovie.objects.all()
    serializer_class        = ComedyRealMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

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
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return ComedyRealMovie.objects.all()


class ComedyRealMovieFeatured(generics.ListAPIView):
    serializer_class        = ComedyRealMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = ComedyRealMovie.objects.featured().search(query)
        else:   
           qs = ComedyRealMovie.objects.featured()
        return qs    