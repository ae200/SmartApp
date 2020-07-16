from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from rest_framework.authentication import TokenAuthentication
from smartapp.mixins import MemberRequiredMixin
from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets
from rest_framework.response import Response

from adventurereal.models import AdventureRealMovie

from .serializers import AdventureRealMovieSerializer, AdventureRealMovieDetailSerializer


class AdventureRealMovieList(generics.ListAPIView):
    queryset                = AdventureRealMovie.objects.all()
    serializer_class        = AdventureRealMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

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
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return AdventureRealMovie.objects.all()


class AdventureRealMovieFeatured(generics.ListAPIView):
    serializer_class        = AdventureRealMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = AdventureRealMovie.objects.featured().search(query)
        else:   
           qs = AdventureRealMovie.objects.featured()
        return qs    

