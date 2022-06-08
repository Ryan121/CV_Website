from django.shortcuts import render
from rest_framework import generics
from api.serializers import ProjectSerializer
from api.models import Project

# Create your views here.
class projectsView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer