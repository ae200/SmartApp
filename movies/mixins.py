from django.http import HttpResponse
from users.models import CustomUser
 
class MemberRequiredMixin(object):
   def dispatch(self, request, *args, **kwargs):
       print("required..?")
       obj = self.get_object()
       user = request.user
       print(user)
       if request.user.is_staff:
           return super(MemberRequiredMixin, self).dispatch(request, *args, **kwargs)
       if obj.free:
           return super(MemberRequiredMixin, self).dispatch(request, *args, **kwargs)
       elif CustomUser.objects.filter(email = user, isPremium = True).exists() and not obj.free:
           return super(MemberRequiredMixin, self).dispatch(request, *args, **kwargs) 
       return HttpResponse("Oops not free") 