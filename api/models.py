from django.db import models
# Robust id convention
import uuid

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100, null=True)
    # thumbnail = models.ImageField()
    body = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.title)

class Skill(models.Model):
    title = models.CharField(max_length=100, null=True)
    body = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)

    def __str__(self):
        return str(self.title)

class Tag(models.Model):
    name = models.CharField(max_length=100, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.title)

class History(models.Model):
    role_name = models.CharField(max_length=100, null=True)
    location = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=5000, null=True)
    date_started = models.DateField(null=True)
    date_ended = models.DateField(null=True)