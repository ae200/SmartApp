from users.models import CustomUser

from rest_framework import generics, status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets, serializers
from rest_framework import serializers as sz
from .serializers import UserSerializer
from django.utils.translation import ugettext_lazy as _
import json
from django.core import serializers 
import requests
from django.http import HttpRequest
from django.contrib.auth import get_user_model
from .managers import CustomUserManager
from allauth.account.adapter import DefaultAccountAdapter
from allauth.account.views  import PasswordChangeView, login
import secrets
import math

def id_generator():
    id = secrets.token_urlsafe(math.floor(32 / 1.3))
    return id

class MakeFlutterWave(APIView):
    permission_classes = (IsAuthenticated,)
    # serializer_class = UserSerializer
    
    def post(self, request, format=None):
        currentstatus2 =CustomUser.objects.filter(email=request.user).all() 
        data = serializers.serialize("json",currentstatus2)
        tmpObj = json.loads(data)
        secretname =tmpObj[0]['fields']['displayname']
        secretphone =tmpObj[0]['fields']['phoneNo']
        posturl = "https://api.flutterwave.com/v3/payments"
        secretkey = 'FLWSECK_TEST-bf3db3404f9179a79d1086423a0b50ee-X'
        ck = id_generator()
        # print(str(ck))
        pload = {
            "tx_ref":str(ck),
            "amount":"840",
            "currency":"NGN",
            "redirect_url":"http://localhost:8000/users/makepremium/",
            "payment_options":"card",
             "customer":{
                "email":str(request.user),
                "phone": str(secretphone),
                "name": str(secretname)
            },
            "customizations":{
                "title":"3D Smart Flix",
                "description":"Upgrade to Premium Account",
                "logo":"https://assets.piedpiper.com/logo.png"
            }
        }
        j = json.dumps(pload)
        k = json.loads(j)
        r = requests.post(posturl, json=k, headers={'Authorization': 'Bearer ' + secretkey})
        return Response(json.loads(r.text))
 
    
    
class PremiumAccount(APIView):
    permission_classes = (AllowAny,)
    serializer = UserSerializer
    model = CustomUser
    def get(self, request, format=None):
        if(request.GET.get('status') == 'successful'):
            verifyurl = 'https://api.flutterwave.com/v3/transactions/ '+ request.GET.get('transaction_id') + '/verify'
            secretkey = 'FLWSECK_TEST-bf3db3404f9179a79d1086423a0b50ee-X'
            k = requests.get(verifyurl, headers={'Authorization': 'Bearer ' + secretkey})
            r = json.loads(k.text)
            if r['status'] =='success':
                CustomUser.objects.filter(email=r['data']['customer']['email']).update(isPremium=True)
                return Response({'success': _('Upgraded Account to premium successfully!!!')})
            else:
                return Response({'error': _('Unable to upgrade Account !!!')})
        else:
            return Response({'error': _('Invalid Payment')})

class AccountDetails(APIView): 
    permission_classes = (AllowAny,) 
    # serializer_class = UserSerializer
    model = CustomUser
    def post(self, request, format=None): 
        if not CustomUser.objects.filter(email=request.data['email']).exists():
            return Response({'error': _("Email is not registered ")})
        currentstatus = CustomUser.objects.filter(email=request.data['email']).all()
        data = serializers.serialize("json",currentstatus)
        tmpObj = json.loads(data)
        data = UserSerializer(tmpObj[0]['fields']).data
        return Response(data)

        
class resetPasswordAccount(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    
    # model = CustomUser
    def post(self, request, format=None): 
        currentstatus2 =CustomUser.objects.filter(email=request.user).all() 
        data = serializers.serialize("json",currentstatus2)
        tmpObj = json.loads(data)
        secretanswer =tmpObj[0]['fields']['secretanswer']
        currentsecretanswer = request.data['secretanswer']
        if request.data['new_password1'] != request.data['new_password2']:
            return Response({"error":_("The two password fields didn't match.")})
        if secretanswer != currentsecretanswer:
            return Response({"error":_("The secret answer is Incorrect.")})
        elif request.data['new_password1'] != request.data['new_password2']:
            return Response({"error": _("Both password don't match ")})
        else:
            request.user.set_password(request.data['new_password1'])
            CustomUser.objects.filter(email=request.user).update(oldpassword = request.data['new_password1'])
            request.user.save()
            return Response({"success": _("New password has been saved.")})

        