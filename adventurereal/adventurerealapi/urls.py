from django.urls import path, re_path

from .views import AdventureRealMovieList,  AdventureRealMovieDetail,  AdventureRealMovieFeatured

urlpatterns = [
    path('', AdventureRealMovieList.as_view()),
    path('featured/', AdventureRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', AdventureRealMovieDetail.as_view()),
]
