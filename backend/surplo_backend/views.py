from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SurploSerializer
from .models import SurploModel

# Create your views here.

class SurploView(viewsets.ModelViewSet):
    serializer_class = SurploSerializer
    queryset = SurploModel.objects.all()