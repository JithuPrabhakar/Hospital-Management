from django.db import models
from datetime import time
from django.contrib.auth.models import User

class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    ROLE_CHOICES = [
        ('Nurse', 'Nurse'),
        ('Technician', 'Technician'),
        ('Receptionist', 'Receptionist'),
        ('Accountant', 'Accountant'),
        ('Cleaner', 'Cleaner'),
        ('Pharmacist', 'Pharmacist'),
        ('Administrator', 'Administrator'),
    ]

    staff_id = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, default='Nurse')
    phone_number = models.CharField(max_length=15)
    shift_start = models.TimeField(default=time(9, 0))
    shift_end = models.TimeField(default=time(17, 0))

    def __str__(self):
        return f"{self.name} ({self.role})"