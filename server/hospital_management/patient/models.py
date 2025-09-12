import uuid
from django.db import models

class Patient(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]

    BLOOD_GROUP_CHOICES = [
        ('A+', 'A+'), ('A-', 'A-'),
        ('B+', 'B+'), ('B-', 'B-'),
        ('AB+', 'AB+'), ('AB-', 'AB-'),
        ('O+', 'O+'), ('O-', 'O-'),
    ]

    
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    phone_number = models.CharField(max_length=10)
    email = models.EmailField(default="default@gmail.com")
    blood_group = models.CharField(max_length=5, choices=BLOOD_GROUP_CHOICES)
    address = models.TextField()
    admitted_date = models.DateField(null=True, blank=True)
    discharge_date = models.DateField(null=True, blank=True)
    allergies = models.TextField(blank=True) 
    doctor_name = models.CharField(max_length=255,  default="Not specified")
    doctor_specialization = models.CharField(max_length=255, default="Not specified")

    token = models.CharField(max_length=20, blank=True, null=True, editable=False)


    def save(self, *args, **kwargs):
        if not self.token:
            # Generate a unique token in Python
            while True:
                token = f"TOKEN-{uuid.uuid4().hex[:8].upper()}"
                if not Patient.objects.filter(token=token).exists():
                    self.token = token
                    break
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} ({self.token})"