from django.http import HttpResponse
from django.core import serializers 
from django.utils.translation import ugettext_lazy as _
from users.models import CustomUser
import json
from rest_framework.authentication import TokenAuthentication
 
class MemberRequiredMixin(object):
    def dispatch(self, request, *args, **kwargs):
       obj = self.get_object()
       try:
           user_auth_tuple = TokenAuthentication().authenticate(request)
           if(user_auth_tuple[0]):
               userModel = CustomUser.objects.filter(email = user_auth_tuple[0]).all()
               data = serializers.serialize("json",userModel)
               tmpObj = json.loads(data)
           if obj.free or tmpObj[0]['fields']['isPremium'] or tmpObj[0]['fields']['is_staff'] or tmpObj[0]['fields']['is_superuser'] :
               return super(MemberRequiredMixin, self).dispatch(request, *args, **kwargs)
           else:
               return HttpResponse({'PremiumError': _('User Must be logged in to view this content')}) 
       except:
           return HttpResponse({'LoginError': _('User Must be logged in to view this content')})
       
        
    