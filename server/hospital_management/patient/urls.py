from django.urls import path
from . import views

urlpatterns = [
    path('patient/',views.patient_list),
    path('patient/<int:pk>/',views.patient_updel),
    path('patient/validate-token/<str:token>/', views.validate_token),

]