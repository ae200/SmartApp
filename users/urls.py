from django.urls import path, re_path

from .views import PremiumAccount, AccountDetails, resetPasswordAccount, MakeFlutterWave


urlpatterns = [
    path('makepremium/',  PremiumAccount.as_view()),
    path('details/',  AccountDetails.as_view()),
    path('resetpassword/', resetPasswordAccount.as_view()),
    path('premiumpay/', MakeFlutterWave.as_view()),
]
