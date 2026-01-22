from django.urls import path
from . import views

urlpatterns = [
    path('doctor/', views.doctor_list),
    path('doctor/<int:pk>/',views.doctor_updel),
    path('add-prescription/', views.add_prescription),
    path('view-prescriptions/<int:doctor_id>/', views.view_prescriptions),
]