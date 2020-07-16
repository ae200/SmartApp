from django.urls import path, re_path

from .views import FictionThrillerMovieList, FictionThrillerMovieDetail, FictionThrillerMovieFeatured

urlpatterns = [
    path('', FictionThrillerMovieList.as_view()),
    path('featured/', FictionThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', FictionThrillerMovieDetail.as_view()),
]



