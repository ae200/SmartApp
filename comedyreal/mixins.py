from django.http import HttpResponse

 
class MemberRequiredMixin(object):
   def dispatch(self, request, *args, **kwargs):
       print("requiring..?")
       obj = self.get_object()
       user = request.user
       if request.user.is_staff:
           return super(MemberRequiredMixin, self).dispatch(request, *args, **kwargs)
       if obj.free:
           return super(MemberRequiredMixin, self).dispatch(request, *args, **kwargs)
       return HttpResponse("Oops not free") 