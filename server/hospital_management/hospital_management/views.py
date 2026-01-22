from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User
from doctor.models import Doctor
from staff.models import Staff
from patient.models import Patient

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        # Add custom claims
        data['username'] = self.user.username
        data['is_superuser'] = self.user.is_superuser
        data['role'] = 'admin' if self.user.is_superuser else 'user'
        
        if hasattr(self.user, 'doctor'):
            data['role'] = 'doctor'
            data['doctor_id'] = self.user.doctor.id
        elif hasattr(self.user, 'staff'):
            data['role'] = 'staff'
            data['staff_id'] = self.user.staff.id
            
        return data

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

@api_view(['GET'])
@permission_classes([IsAdminUser])
def admin_dashboard(request):
    doctor_count = Doctor.objects.count()
    staff_count = Staff.objects.count()
    patient_count = Patient.objects.count()
    pending_patients = Patient.objects.filter(status='Pending').count()
    
    return Response({
        'doctor_count': doctor_count,
        'staff_count': staff_count,
        'patient_count': patient_count,
        'pending_patients': pending_patients
    })
