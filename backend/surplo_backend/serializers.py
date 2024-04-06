from rest_framework import serializers
from .models import SurploModel

class SurploSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurploModel
        fields = ('id', 'title', 'description', 'quantity', 'price', 'expired')