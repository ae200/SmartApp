from allauth.account.adapter import DefaultAccountAdapter


class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=False):
        user.firstname = form.cleaned_data['firstname']
        user.lastname = form.cleaned_data['lastname']
        user.secretquestion = form.cleaned_data['secretquestion']
        user.secretanswer = form.cleaned_data['secretanswer']
        user.displayname = form.cleaned_data['displayname']
        user.email = form.cleaned_data['email']
        user.oldpassword = form.cleaned_data['oldpassword']
        # user.set_password(form.cleaned_data['password1'])
        user = super().save_user(request, user, form, commit)
        user.save()
        return user