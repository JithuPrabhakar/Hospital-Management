import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import "./DoctorPage.css";

const DoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/doctor/doctor/")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  // Group doctors by specialization
  const groupedDoctors = doctors.reduce((groups, doctor) => {
    const spec = doctor.specialization;
    if (!groups[spec]) groups[spec] = [];
    groups[spec].push(doctor);
    return groups;
  }, {});

  return (
    <>
      <Header />
      <h1 className="doctor-title">OUR DOCTORS</h1>
      <div className="doctor-container">
        {Object.keys(groupedDoctors).length === 0 ? (
          <p>No doctors available</p>
        ) : (
          Object.keys(groupedDoctors).map((spec) => (
            <div key={spec} className="specialization-group">
              <h2 className="spec-title">{spec}</h2>
              <div className="spec-doctors">
                {groupedDoctors[spec].map((doctor) => (
                  <div className="doctor-card" key={doctor.id}>
                    <h3>{doctor.name}</h3>
                    <p className="qualification">{doctor.qualification}</p>
                    <p className="availability">Available: {doctor.availability}</p>
                    <div className="doctor-buttons">
                      <button
                        onClick={() => navigate(`/doctors/${doctor.id}`)}
                        className="btn details-btn"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => navigate(`/appointment/${doctor.id}`)}
                        className="btn appointment-btn"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DoctorPage;
