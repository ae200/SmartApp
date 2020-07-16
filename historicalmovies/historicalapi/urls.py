from django.urls import path, re_path

from .views import HistoricalThrillerMovieList, HistoricalThrillerMovieDetail, HistoricalThrillerMovieFeatured, HistoricalRealMovieList, HistoricalRealMovieDetail, HistoricalRealMovieFeatured

urlpatterns = [
    path('', HistoricalThrillerMovieList.as_view()),
    path('featured/', HistoricalThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', HistoricalThrillerMovieDetail.as_view()),
    path('', HistoricalRealMovieList.as_view()),
    path('featured/', HistoricalRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', HistoricalRealMovieDetail.as_view()),
]


