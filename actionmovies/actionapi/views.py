from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from smartapp.mixins import  MemberRequiredMixin

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from actionmovies.models import ActionThrillerMovie, ActionRealMovie

# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permission import IsAuthenticated

from .serializers import ActionThrillerMovieSerializer, ActionThrillerMovieDetailSerializer, ActionRealMovieSerializer, ActionRealMovieDetailSerializer



class ActionThrillerMovieList(generics.ListAPIView):
    queryset                = ActionThrillerMovie.objects.all()
    serializer_class        = ActionThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = []
    # authentication_classes  = (TokenAuthentication,)  
    # permission_classes  = (IsAuthenticated,)


    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = ActionThrillerMovie.objects.search(query)
        else:
           qs = ActionThrillerMovie.objects.all()
        return qs 
     


class ActionThrillerMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = ActionThrillerMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     
        


    def get_queryset(self):
        return ActionThrillerMovie.objects.all()


class ActionThrillerMovieFeatured(generics.ListAPIView):
    serializer_class        = ActionThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = ActionThrillerMovie.objects.featured().search(query)
        else:   
           qs = ActionThrillerMovie.objects.featured()
        return qs    





class ActionRealMovieList(generics.ListAPIView):
    queryset                = ActionRealMovie.objects.all()
    serializer_class        = ActionRealMovieSerializer
    permission_classes      = []
    authentication_classes  = []
    # authentication_classes  = (TokenAuthentication,)  
    # permission_classes  = (IsAuthenticated,)


    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = ActionRealMovie.objects.search(query)
        else:
           qs = ActionRealMovie.objects.all()
        return qs 
     


class ActionRealMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = ActionRealMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     
        


    def get_queryset(self):
        return ActionRealMovie.objects.all()


class ActionRealMovieFeatured(generics.ListAPIView):
    serializer_class        = ActionRealMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = ActionRealMovie.objects.featured().search(query)
        else:   
           qs = ActionRealMovie.objects.featured()
        return qs    
