from django.urls import path, re_path

from .views import DramaRealMovieList,  DramaRealMovieDetail,  DramaRealMovieFeatured

urlpatterns = [
    path('',  DramaRealMovieList.as_view()),
    path('featured/',  DramaRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  DramaRealMovieDetail.as_view())
]