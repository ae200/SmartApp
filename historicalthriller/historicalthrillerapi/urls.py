from django.urls import path, re_path

from .views import HistoricalThrillerMovieList, HistoricalThrillerMovieDetail, HistoricalThrillerMovieFeatured

urlpatterns = [
    path('', HistoricalThrillerMovieList.as_view()),
    path('featured/', HistoricalThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', HistoricalThrillerMovieDetail.as_view()),
]
