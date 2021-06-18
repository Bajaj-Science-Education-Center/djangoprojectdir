from django.db import models
from django.contrib.auth.models import User

class Notice(models.Model):
    title = models.CharField(max_length=200)
    message = models.CharField(max_length=1000, null=True)

    def __str__(self):
        return(self.title)

class Image(models.Model):
    path = models.CharField(max_length=100)
    title = models.CharField(max_length=50)
    caption= models.CharField(max_length=200)

    def __str__(self):
        return(self.title)

class Trivia(models.Model):
    title = models.CharField(max_length=200)
    message = models.CharField(max_length=1000, null=True)

    def __str__(self):
        return(self.title)

class VisitingFaculty(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=2000, null=True)
    image_source = models.CharField(max_length=1000, null=True)

    def __str__(self):
        return(self.name)
