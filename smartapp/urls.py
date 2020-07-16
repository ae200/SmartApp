"""smartapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, re_path, include
from django.contrib import admin 
from django.views.generic.base import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin/', admin.site.urls),
    #path('register/', register),
    # url (r'^$', TemplateView.as_view(template_name="ang_home.html"), name='home'),
    path('api/movies/', include('movies.api.urls')),
    # path('streamapi/streammovies/', include('streammovies.streamapi.urls')),
    path('actionapi/actionmovies/', include('actionmovies.actionapi.urls')),
    path('actionthrillerapi/actionthriller/', include('actionthriller.actionthrillerapi.urls')),
    path('actionrealapi/actionreal/', include('actionreal.actionrealapi.urls')),
    path('adventureapi/adventuremovies/', include('adventuremovies.adventureapi.urls')),
    path('adventurethrillerapi/adventurethriller/', include('adventurethriller.adventurethrillerapi.urls')),
    path('adventurerealapi/adventurereal/', include('adventurereal.adventurerealapi.urls')),
    path('comedyapi/comedymovies/', include('comedymovies.comedyapi.urls')),
    path('comedythrillerapi/comedythriller/', include('comedythriller.comedythrillerapi.urls')),
    path('comedyrealapi/comedyreal/', include('comedyreal.comedyrealapi.urls')),
    path('dramathrillerapi/dramathriller/', include('dramathriller.dramathrillerapi.urls')),
    path('dramarealapi/dramareal/', include('dramareal.dramarealapi.urls')),
    path('dramaapi/dramamovies/', include('dramamovies.dramaapi.urls')),
    path('fictionthrillerapi/fictionthriller/', include('fictionthriller.fictionthrillerapi.urls')),
    path('fictionrealapi/fictionreal/', include('fictionreal.fictionrealapi.urls')),
    path('fictionapi/fictionmovies/', include('fictionmovies.fictionapi.urls')),
    path('historicalapi/historicalmovies/', include('historicalmovies.historicalapi.urls')),
    path('historicalthrillerapi/historicalthriller/', include('historicalthriller.historicalthrillerapi.urls')),
    path('historicalrealapi/historicalreal/', include('historicalreal.historicalrealapi.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^users/', include('users.urls')),
    url(r'^account/', include('allauth.urls')),
    url(r'^accounts-rest/registration/account-confirm-email/(?P<key>.+)/', confirm_email, name='account_confirm_email')
]

urlpatterns += [
    re_path(r'^(?P<path>.*)', TemplateView.as_view(template_name="ang_movies.html"), name='movies'),
    re_path(r'^(?P<path>.*)', TemplateView.as_view(template_name="ang_home.html"), name='home'),
]