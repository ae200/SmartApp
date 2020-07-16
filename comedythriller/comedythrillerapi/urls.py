from django.urls import path, re_path
from .views import ComedyThrillerMovieList,  ComedyThrillerMovieDetail,  ComedyThrillerMovieFeatured
 
urlpatterns = [
    path('',  ComedyThrillerMovieList.as_view()),
    path('featured/',  ComedyThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ComedyThrillerMovieDetail.as_view()),
]
