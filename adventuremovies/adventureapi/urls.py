from django.urls import path, re_path

from .views import AdventureThrillerMovieList,  AdventureThrillerMovieDetail,  AdventureThrillerMovieFeatured, AdventureRealMovieList,  AdventureRealMovieDetail,  AdventureRealMovieFeatured

urlpatterns = [
    path('', AdventureThrillerMovieList.as_view()),
    path('featured/', AdventureThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', AdventureThrillerMovieDetail.as_view()),
    path('', AdventureRealMovieList.as_view()),
    path('featured/', AdventureRealMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', AdventureRealMovieDetail.as_view()),
]
