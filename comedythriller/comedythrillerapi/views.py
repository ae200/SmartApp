from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework.authentication import TokenAuthentication

from rest_framework import viewsets

from rest_framework.permissions import IsAuthenticated

from smartapp.mixins import MemberRequiredMixin

from rest_framework.response import Response

from comedythriller.models import ComedyThrillerMovie

from .serializers import ComedyThrillerMovieSerializer, ComedyThrillerMovieDetailSerializer

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

