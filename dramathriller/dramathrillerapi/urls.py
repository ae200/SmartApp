from django.urls import path, re_path

from .views import DramaThrillerMovieList,  DramaThrillerMovieDetail,  DramaThrillerMovieFeatured

urlpatterns = [
    path('',  DramaThrillerMovieList.as_view()),
    path('featured/',  DramaThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  DramaThrillerMovieDetail.as_view()),
]
