from django.urls import path, re_path
from .views import ComedyRealMovieList,  ComedyRealMovieDetail,  ComedyRealMovieFeatured

urlpatterns = [
    path('',  ComedyRealMovieList.as_view()),
    path('featured/',  ComedyRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ComedyRealMovieDetail.as_view()),
]
