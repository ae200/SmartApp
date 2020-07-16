from django.db import models
from django.db.models import F
import uuid
from django.contrib.auth.models import AbstractUser, BaseUserManager

from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager
    
class CustomUser(AbstractUser):
    USERNAME_FIELD = 'email'
    username = None
    firstname = models.CharField(max_length=256)
    # id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    lastname = models.CharField(max_length=256)
    displayname = models.CharField(max_length=256)
    email = models.EmailField(_('email address'), unique= True)
    isPremium = models.BooleanField(default=False)
    secretquestion = models.IntegerField()
    password = models.CharField(max_length=256)
    phoneNo = models.CharField(max_length=256)
    oldpassword = models.CharField(max_length=256)
    secretanswer = models.CharField(max_length=256) 
    REQUIRED_FIELDS = ['secretquestion', 'password', 'secretanswer', 'firstname', 'lastname', 'displayname', 'phoneNo', 'oldpassword']
    
    objects = CustomUserManager()
    
 


    def __str__(self):
        return self.email

# Create your models here.
