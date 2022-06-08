from django import views
from django.urls import path
from api.views import projectsView

urlpatterns = [
    path('projects/', projectsView.as_view()),

]
