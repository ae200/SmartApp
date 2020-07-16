# accounts.forms.py
from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField

from users.models import CustomUser as User


class RegisterForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm password', widget=forms.PasswordInput)
    isPremium = forms.BooleanField(label='is Premium')
    
    class Meta:
        model = User
        fields = ('email', 'isPremium')

    def clean_email(self):
        email = self.cleaned_data.get('email')
        qs = User.objects.filter(email=email)
        if qs.exists():
            raise forms.ValidationError("email is taken")
        return email

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2


class UserAdminCreationForm(forms.ModelForm):
    """
    A form for creating new users. Includes all the required
    fields, plus a repeated password.
    """
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    # password3 = forms.CharField(label='Password 3', widget=forms.PasswordInput)
    firstname = forms.CharField(label='First Name', widget=forms.TextInput)
    lastname = forms.CharField(label='Last Name', widget=forms.TextInput)
    # see = forms.CharField(label='Last Name', widget=forms.TextInput)
    displayname = forms.CharField(label='Display Name', widget=forms.TextInput)
    secretquestion = forms.IntegerField(label='Secret  Question', widget=forms.TextInput)
    secretanswer = forms.CharField(label='Secret Answer', widget=forms.TextInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)
    isPremium = forms.BooleanField(label='is Premium', widget=forms.CheckboxInput)

    class Meta:
        model = User
        fields = ('email', 'isPremium', 'lastname', 'firstname', 'secretquestion', 'displayname', 'secretanswer')

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super(UserAdminCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserAdminChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's
    password hash display field.
    """
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('email', 'password', 'isPremium', 'firstname', 'lastname', 'secretquestion', 'secretanswer','displayname')

    def clean_password(self):
        # Regardless of what the user provides, return the initial value.
        # This is done here, rather than on the field, because the
        # field does not have access to the initial value
        return self.initial["password"]