from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Doctor
from .serializers import DoctorSerializer

# Create your views here.

@api_view(['GET','POST'])
def doctor_list(request):
    if request.method =='GET':
        doctor = Doctor.objects.all()
        serializer = DoctorSerializer(doctor,many=True)
        return Response(serializer.data)
    elif request.method =='POST':
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['PUT','DELETE'])
def doctor_updel(request,pk):
    try:
        doctor = Doctor.objects.get(pk=pk)
    except Doctor.DoesNotExist:
        return Response({'err':'Doctor not found'},status = status.HTTP_HTTP_400_BAD_REQUEST)
    if request.method=='PUT':
        serializer = DoctorSerializer(doctor,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    elif request.method =='DELETE':
        doctor.delete()
        return Response(status =status.HTTP_204_NO_CONTENT)