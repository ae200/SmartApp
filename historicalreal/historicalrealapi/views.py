from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from rest_framework.authentication import TokenAuthentication

from smartapp.mixins import MemberRequiredMixin


from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from historicalreal.models import HistoricalRealMovie

from .serializers import HistoricalRealMovieSerializer, HistoricalRealMovieDetailSerializer


class HistoricalRealMovieList(generics.ListAPIView):
    queryset                = HistoricalRealMovie.objects.all()
    serializer_class        = HistoricalRealMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = HistoricalRealMovie.objects.search(query)
        else:
           qs = HistoricalRealMovie.objects.all()
        return qs 
     


class HistoricalRealMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = HistoricalRealMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return HistoricalRealMovie.objects.all()


class HistoricalRealMovieFeatured(generics.ListAPIView):
    serializer_class        = HistoricalRealMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = HistoricalRealMovie.objects.featured().search(query)
        else:   
           qs = HistoricalRealMovie.objects.featured()
        return qs   
 