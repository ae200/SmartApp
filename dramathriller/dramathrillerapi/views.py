from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from smartapp.mixins import MemberRequiredMixin

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework.authentication import TokenAuthentication
from dramamovies.models import DramaThrillerMovie

from .serializers import DramaThrillerMovieSerializer, DramaThrillerMovieDetailSerializer

class DramaThrillerMovieList(generics.ListAPIView):
    queryset                = DramaThrillerMovie.objects.all()
    serializer_class        = DramaThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = DramaThrillerMovie.objects.search(query)
        else:
           qs = DramaThrillerMovie.objects.all()
        return qs 
     


class DramaThrillerMovieDetail(generics.RetrieveAPIView):
    serializer_class        = DramaThrillerMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return DramaThrillerMovie.objects.all()


class DramaThrillerMovieFeatured(generics.ListAPIView):
    serializer_class        = DramaThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = DramaThrillerMovie.objects.featured().search(query)
        else:   
           qs = DramaThrillerMovie.objects.featured()
        return qs    

