from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100, null=True)
    slug = models.CharField(max_length=5000, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)


class Skill(models.Model):
    title = models.CharField(max_length=100, null=True)
    slug = models.CharField(max_length=5000, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)


class Tag(models.Model):
    name = models.CharField(max_length=100, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)


class History(models.Model):
    role_name = models.CharField(max_length=100, null=True)
    location = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=5000, null=True)
    date_started = models.DateField(null=True)
    date_ended = models.DateField(null=True)