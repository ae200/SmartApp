from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from smartapp.mixins import MemberRequiredMixin

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets
from rest_framework.response import Response

from fictionthriller.models import FictionThrillerMovie

from .serializers import FictionThrillerMovieSerializer, FictionThrillerMovieDetailSerializer

class FictionThrillerMovieList(generics.ListAPIView):
    queryset                = FictionThrillerMovie.objects.all()
    serializer_class        = FictionThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = FictionThrillerMovie.objects.search(query)
        else:
           qs = FictionThrillerMovie.objects.all()
        return qs 
     


class FictionThrillerMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = FictionThrillerMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return FictionThrillerMovie.objects.all()


class FictionThrillerMovieFeatured(generics.ListAPIView):
    serializer_class        = FictionThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = FictionThrillerMovie.objects.featured().search(query)
        else:   
           qs = FictionThrillerMovie.objects.featured()
        return qs    
