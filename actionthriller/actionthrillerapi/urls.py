from django.urls import path, re_path

from .views import ActionThrillerMovieList,  ActionThrillerMovieDetail,  ActionThrillerMovieFeatured

urlpatterns = [
    path('',  ActionThrillerMovieList.as_view()),
    path('featured/',  ActionThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ActionThrillerMovieDetail.as_view()),
]