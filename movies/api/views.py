from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser



from rest_framework import viewsets


from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from smartapp.mixins import MemberRequiredMixin

from rest_framework.authentication import TokenAuthentication

from actionmovies.models import ActionThrillerMovie, ActionRealMovie
from adventuremovies.models import AdventureThrillerMovie, AdventureRealMovie
from comedymovies.models import ComedyThrillerMovie, ComedyRealMovie
from dramamovies.models import DramaThrillerMovie, DramaRealMovie
from fictionmovies.models import FictionThrillerMovie, FictionRealMovie
from historicalmovies.models import HistoricalThrillerMovie, HistoricalRealMovie


from actionmovies.serializers import ActionThrillerMovieSerializer, ActionThrillerMovieDetailSerializer, ActionRealMovieSerializer, ActionRealMovieDetailSerializer
from adventuremovies.serializers import AdventureThrillerMovieSerializer, AdventureThrillerMovieDetailSerializer, AdventureRealMovieSerializer, AdventureRealMovieDetailSerializer
from comedymovies.serializers import ComedyThrillerMovieSerializer, ComedyThrillerMovieDetailSerializer, ComedyRealMovieSerializer, ComedyRealMovieDetailSerializer
from dramamovies.serializers import DramaThrillerMovieSerializer, DramaThrillerMovieDetailSerializer, DramaRealMovieSerializer, DramaRealMovieDetailSerializer
from fictionmovies.serializers import FictionThrillerMovieSerializer, FictionThrillerMovieDetailSerializer, FictionRealMovieSerializer, FictionRealMovieDetailSerializer
from historicalmovies.serializers import HistoricalThrillerMovieSerializer, HistoricalThrillerMovieDetailSerializer, HistoricalRealMovieSerializer, HistoricalRealMovieDetailSerializer


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
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]
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
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]     
        


    def get_queryset(self):
        return ActionRealMovie.objects.all()


class ActionRealMovieFeatured(generics.ListAPIView):
    serializer_class        = ActionRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = ActionRealMovie.objects.featured().search(query)
        else:   
           qs = ActionRealMovie.objects.featured()
        return qs    





class AdventureThrillerMovieList(generics.ListAPIView):
    queryset                = AdventureThrillerMovie.objects.all()
    serializer_class        = AdventureThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = [] 

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           #qs = Movie.objects.filter(name__icontains=query)
           qs = AdventureThrillerMovie.objects.search(query)
        else:
           qs = AdventureThrillerMovie.objects.all()
        return qs 
     


class AdventureThrillerMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
    serializer_class        = AdventureThrillerMovieDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []     


    def get_queryset(self):
        return AdventureThrillerMovie.objects.all()


class AdventureThrillerMovieFeatured(generics.ListAPIView):
    serializer_class        = AdventureThrillerMovieSerializer
    permission_classes      = []
    authentication_classes  = []  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = AdventureThrillerMovie.objects.featured().search(query)
        else:   
           qs = AdventureThrillerMovie.objects.featured()
        return qs    



class AdventureRealMovieList(generics.ListAPIView):
    queryset                = AdventureRealMovie.objects.all()
    serializer_class        = AdventureRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication] 

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
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]     


    def get_queryset(self):
        return AdventureRealMovie.objects.all()


class AdventureRealMovieFeatured(generics.ListAPIView):
    serializer_class        = AdventureRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = AdventureRealMovie.objects.featured().search(query)
        else:   
           qs = AdventureRealMovie.objects.featured()
        return qs    




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





class ComedyRealMovieList(generics.ListAPIView):
    queryset                = ComedyRealMovie.objects.all()
    serializer_class        = ComedyRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication] 

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
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]     


    def get_queryset(self):
        return ComedyRealMovie.objects.all()


class ComedyRealMovieFeatured(generics.ListAPIView):
    serializer_class        = ComedyRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = ComedyRealMovie.objects.featured().search(query)
        else:   
           qs = ComedyRealMovie.objects.featured()
        return qs    




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
     


class DramaThrillerMovieDetail(MemberRequiredMixin, generics.RetrieveAPIView):
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




class DramaRealMovieList(generics.ListAPIView):
    queryset                = DramaRealMovie.objects.all()
    serializer_class        = DramaRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication] 

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
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]     


    def get_queryset(self):
        return DramaRealMovie.objects.all()


class DramaRealMovieFeatured(generics.ListAPIView):
    serializer_class        = DramaRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = DramaRealMovie.objects.featured().search(query)
        else:   
           qs = DramaRealMovie.objects.featured()
        return qs    



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




class FictionRealMovieList(generics.ListAPIView):
    queryset                = FictionRealMovie.objects.all()
    serializer_class        = FictionRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication] 

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
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]     


    def get_queryset(self):
        return FictionRealMovie.objects.all()


class FictionRealMovieFeatured(generics.ListAPIView):
    serializer_class        = FictionRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = FictionRealMovie.objects.featured().search(query)
        else:   
           qs = FictionRealMovie.objects.featured()
        return qs    



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




class HistoricalRealMovieList(generics.ListAPIView):
    queryset                = HistoricalRealMovie.objects.all()
    serializer_class        = HistoricalRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication] 

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
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]     


    def get_queryset(self):
        return HistoricalRealMovie.objects.all()


class HistoricalRealMovieFeatured(generics.ListAPIView):
    serializer_class        = HistoricalRealMovieSerializer
    permission_classes      = [IsAuthenticated]
    authentication_classes  = [TokenAuthentication]  

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
           qs = HistoricalRealMovie.objects.featured().search(query)
        else:   
           qs = HistoricalRealMovie.objects.featured()
        return qs    

