from django.urls import path, re_path

from .views import HistoricalRealMovieList, HistoricalRealMovieDetail, HistoricalRealMovieFeatured

urlpatterns = [
    path('', HistoricalRealMovieList.as_view()),
    path('featured/', HistoricalRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', HistoricalRealMovieDetail.as_view()),
]

