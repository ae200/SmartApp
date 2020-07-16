from django.urls import path, re_path

from .views import AdventureThrillerMovieList,  AdventureThrillerMovieDetail,  AdventureThrillerMovieFeatured

urlpatterns = [
    path('', AdventureThrillerMovieList.as_view()),
    path('featured/', AdventureThrillerMovieFeatured.as_view()),
    re_path(r'^(?P<slug>[\w-]+)/$', AdventureThrillerMovieDetail.as_view()),
]