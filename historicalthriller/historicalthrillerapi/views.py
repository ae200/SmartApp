from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from rest_framework.authentication import TokenAuthentication

from smartapp.mixins import MemberRequiredMixin

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from historicalthriller.models import HistoricalThrillerMovie

from .serializers import HistoricalThrillerMovieSerializer, HistoricalThrillerMovieDetailSerializer


class HistoricalThrillerMovieList(generics.ListAPIView):
    queryset                = HistoricalThrillerMovie.objects.all()
    serializer_class        = HistoricalThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = HistoricalThrillerMovie.objects.search(query)
        else:
           qs = HistoricalThrillerMovie.objects.all()
        return qs 
     


class HistoricalThrillerMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = HistoricalThrillerMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return HistoricalThrillerMovie.objects.all()


class HistoricalThrillerMovieFeatured(generics.ListAPIView):
    serializer_class        = HistoricalThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = HistoricalThrillerMovie.objects.featured().search(query)
        else:   
           qs = HistoricalThrillerMovie.objects.featured()
        return qs    

