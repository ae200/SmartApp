from django.urls import path, re_path

from .views import ActionThrillerMovieList,  ActionThrillerMovieDetail,  ActionThrillerMovieFeatured, ActionRealMovieList,  ActionRealMovieDetail,  ActionRealMovieFeatured

urlpatterns = [
    path('',  ActionThrillerMovieList.as_view()),
    path('featured/',  ActionThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ActionThrillerMovieDetail.as_view()),
    path('',  ActionRealMovieList.as_view()),
    path('featured/',  ActionRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ActionRealMovieDetail.as_view())
]
