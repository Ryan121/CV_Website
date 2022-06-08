from django import views
from django.urls import path
from api.views import main

urlpatterns = [
    path('main/', main),

]
