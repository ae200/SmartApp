from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):

    use_in_migrations = True

    def _create_user(self, email, password, firstname, lastname, secretquestion, secretanswer, displayname,phoneNo,isPremium,oldpassword,
                     **extra_fields):
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, firstname=firstname, lastname=lastname,
                          secretquestion=secretquestion, secretanswer= secretanswer, displayname = displayname, phoneNo=phoneNo,isPremium=isPremium,oldpassword=oldpassword, **extra_fields)
        print(password, oldpassword)
        user.set_password(password)
        user.save()
        return user

    def create_user(self,email, password, firstname, lastname, secretquestion, secretanswer, displayname,phoneNo,isPremium,oldpassword,
                     **extra_fields):

        # vals = update_user_settings()

        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_active', True)

        return self._create_user(email=email, firstname=firstname, lastname=lastname,
                          secretquestion=secretquestion, secretanswer= secretanswer, displayname = displayname, phoneNo=phoneNo,isPremium=isPremium, oldpassword=oldpassword,**extra_fields)

    def create_superuser(self,email, password, firstname, lastname, secretquestion, secretanswer, displayname,phoneNo,oldpassword,
                     **extra_fields):
    

        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')

        return self._create_user(email=email, password = password, firstname=firstname, lastname=lastname,
                          secretquestion=secretquestion, secretanswer= secretanswer, displayname = displayname, phoneNo = phoneNo, isPremium=True,oldpassword=oldpassword, **extra_fields)

