from rest_framework import serializers
from users.models import CustomUser
from allauth.account import app_settings as allauth_settings
from allauth.utils import email_address_exists
from allauth.account.adapter import get_adapter
from django.utils.translation import ugettext_lazy as _
from allauth.account.utils import setup_user_email, perform_login
from rest_framework.permissions import IsAuthenticated, AllowAny
from users.models import CustomUser
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import update_last_login
from django.contrib.auth.forms import PasswordResetForm, SetPasswordForm
from rest_framework_jwt.settings import api_settings
from django.conf import settings

JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'firstname', 'lastname', 'isPremium', 'secretquestion', 'secretanswer', 'displayname', 'phoneNo', 'oldpassword']
        def create(self, validated_data):
            return CustomUser.objects.create(**validated_data)


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True, write_only=True)
    secretquestion = serializers.IntegerField(required=True, write_only=True)
    secretanswer = serializers.CharField(required=True, write_only=True)

    def validate_email(self, value):
        if not CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError(_('Invalid e-mail address'))
        return value,
    def validate_secretanswer(self, value):
        currentUser = CustomUser.objects.filter(email=self.email).all()
        print(currentUser)


class RegisterSerializer(serializers.Serializer):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer
    email = serializers.EmailField(required=allauth_settings.EMAIL_REQUIRED)
    firstname = serializers.CharField(required=True, write_only=True)
    lastname = serializers.CharField(required=True, write_only=True)
    password1 = serializers.CharField(required=True, write_only=True)
    password2 = serializers.CharField(required=True, write_only=True)
    secretquestion = serializers.IntegerField(required=True, write_only=True)
    secretanswer = serializers.CharField(required=True, write_only=True)
    isPremium = serializers.BooleanField(required=False, write_only=True)
    oldpassword = serializers.CharField(required=True, write_only=True)
    displayname = serializers.CharField(required=True, write_only=True)
    
    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError(
                _("The two password fields didn't match."))
        return data

    def get_cleaned_data(self):
        return {
            'firstname': self.validated_data.get('firstname', ''),
            'lastname': self.validated_data.get('lastname', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
            'secretquestion': self.validated_data.get('secretquestion', ''),
            'secretanswer': self.validated_data.get('secretanswer', ''),
            'displayname': self.validated_data.get('displayname', ''),
            'oldpassword': self.validated_data.get('oldpassword', ''),
            'isPremium': self.validated_data.get('isPremium', False),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.save()
        return user

