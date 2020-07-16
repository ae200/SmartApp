from django.urls import path, re_path

from .views import DramaThrillerMovieList,  DramaThrillerMovieDetail,  DramaThrillerMovieFeatured, DramaRealMovieList,  DramaRealMovieDetail,  DramaRealMovieFeatured

urlpatterns = [
    path('',  DramaThrillerMovieList.as_view()),
    path('featured/',  DramaThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  DramaThrillerMovieDetail.as_view()),
    path('',  DramaRealMovieList.as_view()),
    path('featured/',  DramaRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  DramaRealMovieDetail.as_view())
]

