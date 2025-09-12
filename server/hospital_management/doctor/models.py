from django.db import models
from datetime import time  # add this

class Doctor(models.Model):
    SPECIALIZATION_CHOICES = [
    ("Cardiologist", "Cardiologist"),
    ("Dermatologist", "Dermatologist"),
    ("Neurologist", "Neurologist"),
    ("General Physician", "General Physician"),
    ("Pediatrician", "Pediatrician"),
    ("Orthopedic", "Orthopedic"),
    ("Psychiatrist", "Psychiatrist"),
    ("Gynecologist", "Gynecologist"),
    ("ENT Specialist", "ENT Specialist"),
    ("Radiologist", "Radiologist"),]

    QUALIFICATION_CHOICES = [
    ("MBBS", "MBBS"),
    ("MD", "MD"),
    ("DO", "DO"),
    ("DM", "DM"),
    ("PhD", "PhD"),
    ("MBChB", "MBChB"),
    ]
    
    doctor_id = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100, choices=SPECIALIZATION_CHOICES)
    qualification = models.CharField(max_length=50, choices=QUALIFICATION_CHOICES, default="MBBS")
    phone_number = models.CharField(max_length=15)
    availability = models.TextField(default="Mon-Fri", help_text="e.g., Mon-Fri")
    shift_start = models.TimeField(default=time(9, 0))
    shift_end = models.TimeField(default=time(17, 0))

    def __str__(self):
        return f"{self.name} - {self.specialization}"