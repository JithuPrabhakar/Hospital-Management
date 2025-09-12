import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';

const PatientPage = () => {
const location = useLocation();
  const patient = location.state?.patient;
  const navigate = useNavigate()

  if (!patient) {
    return <p>No patient data available.</p>;
  }

  return (
    <>
    <Header/>
    <div className='patient-details' >
      <h2>Patient Appointment Details</h2>
    
      <div className='patient-row'><span><strong>Name:</strong></span> <span></span>{patient.name}</div>
      <div className='patient-row'><span><strong>Gender:</strong> </span><span>{patient.gender}</span></div>
      <div className='patient-row'><span><strong>Email:</strong> </span><span>{patient.email}</span></div>
      <div className='patient-row'><span><strong>Phone Number:</strong> </span><span>{patient.phone_number}</span></div>
      <div className='patient-row'><span><strong>Date of Birth:</strong> </span><span>{patient.date_of_birth}</span></div>
      <div className='patient-row'><span><strong>Blood Group:</strong></span> <span>{patient.blood_group}</span></div>
      <div className='patient-row'><span><strong>Admitted Date:</strong></span> <span>{patient.admitted_date || 'N/A'}</span></div>
      <div className='patient-row'><span><strong>Discharge Date:</strong></span> <span>{patient.discharge_date || 'N/A'}</span></div>
      <div className='patient-row'><span><strong>Allergies:</strong></span> <span>{patient.allergies || 'None'}</span></div>
      <div className='patient-row'><span><strong>Doctor Name:</strong></span> <span>{patient.doctor_name}</span></div>
      <div className='patient-row'><span><strong>Doctor Specialization:</strong></span><span> {patient.doctor_specialization}</span></div>
      <button className="back-button" onClick={() => navigate(-2)}>
        ← Back to Appointment
      </button>
    </div>
    </>
  );
};
export default PatientPage;
