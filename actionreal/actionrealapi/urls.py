from django.urls import path, re_path

from .views import ActionRealMovieList,  ActionRealMovieDetail,  ActionRealMovieFeatured

urlpatterns = [
    path('',  ActionRealMovieList.as_view()),
    path('featured/',  ActionRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$',  ActionRealMovieDetail.as_view())
]