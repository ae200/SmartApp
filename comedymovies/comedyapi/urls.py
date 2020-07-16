from django.urls import path, re_path
from .views import ComedyThrillerMovieList,  ComedyThrillerMovieDetail,  ComedyThrillerMovieFeatured, ComedyRealMovieList,  ComedyRealMovieDetail,  ComedyRealMovieFeatured

urlpatterns = [
    path('',  ComedyThrillerMovieList.as_view()),
    path('featured/',  ComedyThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ComedyThrillerMovieDetail.as_view()),
    path('',  ComedyRealMovieList.as_view()),
    path('featured/',  ComedyRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ComedyRealMovieDetail.as_view()),
]
