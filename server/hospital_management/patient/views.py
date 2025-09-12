from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Patient
from .serializers import PatientSerializer

# Create your views here.

@api_view(['GET','POST'])
def patient_list(request):
    if request.method == 'GET':
        patient =Patient.objects.all()
        serializer= PatientSerializer(patient,many=True)
        return Response(serializer.data)
    elif request.method =='POST':
        serializer = PatientSerializer(data = request.data)
        if serializer.is_valid():
            patient = serializer.save()  # token is generated automatically
            response_data = serializer.data
            response_data['token'] = patient.token
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','DELETE'])
def patient_updel(request,pk):
    try:
        patient = Patient.objects.get(pk=pk)
    except Patient.DoesNotExist:
        return Response({'err':'Patient not found'},status = status.HTTP_400_BAD_REQUEST)
    if request.method =='PUT':
        serializer = PatientSerializer(patient,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    elif request.method =='DELETE':
        patient.delete()
        return Response(status =status.HTTP_204_NO_CONTENT)
    
    # token

@api_view(['GET'])
def validate_token(request, token):
    try:
        patient = Patient.objects.get(token=token)
        serializer = PatientSerializer(patient)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Patient.DoesNotExist:
        return Response({"error": "Invalid token."}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"error": f"Server error: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

