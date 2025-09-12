from django.urls import path
from . import views

urlpatterns = [
    path('doctor/', views.doctor_list),
    path('doctor/<int:pk>/',views.doctor_updel),
]