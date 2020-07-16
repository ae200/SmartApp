from django.urls import path, re_path

from actionmovies.actionapi.views import ActionThrillerMovieList,  ActionThrillerMovieDetail,  ActionThrillerMovieFeatured, ActionRealMovieList,  ActionRealMovieDetail,  ActionRealMovieFeatured
from adventuremovies.adventureapi.views import AdventureThrillerMovieList,  AdventureThrillerMovieDetail,  AdventureThrillerMovieFeatured, AdventureRealMovieList,  AdventureRealMovieDetail,  AdventureRealMovieFeatured
from comedymovies.comedyapi.views import ComedyThrillerMovieList,  ComedyThrillerMovieDetail,  ComedyThrillerMovieFeatured,  ComedyRealMovieList,  ComedyRealMovieDetail,  ComedyRealMovieFeatured
from dramamovies.dramaapi.views import DramaThrillerMovieList,  DramaThrillerMovieDetail,  DramaThrillerMovieFeatured, DramaRealMovieList,  DramaRealMovieDetail,  DramaRealMovieFeatured
from fictionmovies.fictionapi.views import FictionThrillerMovieList,  FictionThrillerMovieDetail,  FictionThrillerMovieFeatured, FictionRealMovieList,  FictionRealMovieDetail,  FictionRealMovieFeatured
from historicalmovies.historicalapi.views import HistoricalThrillerMovieList,  HistoricalThrillerMovieDetail,  HistoricalThrillerMovieFeatured, HistoricalRealMovieList,  HistoricalRealMovieDetail,  HistoricalRealMovieFeatured

urlpatterns = [
    path('',  ActionThrillerMovieList.as_view()),
    path('featured/',  ActionThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ActionThrillerMovieDetail.as_view()),
    path('',  ActionRealMovieList.as_view()),
    path('featured/',  ActionRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ActionRealMovieDetail.as_view()),
    path('', AdventureThrillerMovieList.as_view()),
    path('featured/', AdventureThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', AdventureThrillerMovieDetail.as_view()),
    path('', AdventureRealMovieList.as_view()),
    path('featured/', AdventureRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', AdventureRealMovieDetail.as_view()),
    path('',  ComedyThrillerMovieList.as_view()),
    path('featured/',  ComedyThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ComedyThrillerMovieDetail.as_view()),
    path('',  ComedyRealMovieList.as_view()),
    path('featured/',  ComedyRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ComedyRealMovieDetail.as_view()),
    path('',  DramaThrillerMovieList.as_view()),
    path('featured/',  DramaThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  DramaThrillerMovieDetail.as_view()), 
    path('',  DramaRealMovieList.as_view()),
    path('featured/',  DramaRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  DramaRealMovieDetail.as_view()),
    path('', FictionThrillerMovieList.as_view()),
    path('featured/', FictionThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', FictionThrillerMovieDetail.as_view()),
    path('', FictionRealMovieList.as_view()),
    path('featured/', FictionRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', FictionRealMovieDetail.as_view()),
    path('', HistoricalThrillerMovieList.as_view()),
    path('featured/', HistoricalThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', HistoricalThrillerMovieDetail.as_view()),
    path('', HistoricalRealMovieList.as_view()),
    path('featured/', HistoricalRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', HistoricalRealMovieDetail.as_view()),
    # path(r'^$', MovieList.as_view()),
    # re_path(r'^featured/$', MovieFeatured.as_view()),
    # re_path(r'^(?P<slug>[\w-]+)/$', MovieDetail.as_view()),
]
