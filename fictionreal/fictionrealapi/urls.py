from django.urls import path, re_path

from .views import FictionRealMovieList, FictionRealMovieDetail, FictionRealMovieFeatured


urlpatterns = [
    path('', FictionRealMovieList.as_view()),
    path('featured/', FictionRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', FictionRealMovieDetail.as_view()),
]
