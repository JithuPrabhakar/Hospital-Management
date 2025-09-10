from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    admitted_date = serializers.DateField(required=False, allow_null=True)
    discharge_date = serializers.DateField(required=False, allow_null=True)
    
    class Meta:
        model = Patient
        fields = '__all__'