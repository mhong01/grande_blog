from django.db import models

# Create your models here.
class User (models.Model):
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
