import React, { useState } from "react";
import "./PrescriptionForm.css";

const PrescriptionForm = () => {
  const [formData, setFormData] = useState({
    prescriptionId: "",
    patientName: "",
    patientId: "",
    age: "",
    gender: "",
    doctorName: "",
    specialization: "",
    date: "",
    symptoms: "",
    diagnosis: "",
    medicines: "",
    instructions: "",
    vitals: "",
    tests: "",
    allergies: "",
    followUpDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prescription Data:", formData);
    alert("Prescription Saved!");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={() => alert("Close modal")}>
          ✖
        </button>

        <h2 className="form-title">PRESCRIPTION FORM</h2>

        <form onSubmit={handleSubmit}>
          {/* Prescription Info */}
          <div className="section-box">
            <h3 className="section-title">Prescription Info</h3>
            <div className="form-section">
              <div className="form-row full-width">
                <label>Prescription ID</label>
                <input
                  type="text"
                  name="prescriptionId"
                  value={formData.prescriptionId}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Patient Details */}
          <div className="section-box">
            <h3 className="section-title">Patient Details</h3>
            <div className="form-section">
              <div className="form-row">
                <label>Patient Name</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>Patient ID</label>
                <input
                  type="text"
                  name="patientId"
                  value={formData.patientId}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">--Select--</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="section-box">
            <h3 className="section-title">Doctor Details</h3>
            <div className="form-section">
              <div className="form-row">
                <label>Doctor Name</label>
                <input
                  type="text"
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row full-width">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Medical Details */}
          <div className="section-box">
            <h3 className="section-title">Medical Details</h3>
            <div className="form-section">
              <div className="form-row full-width">
                <label>Symptoms</label>
                <textarea
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row full-width">
                <label>Diagnosis</label>
                <textarea
                  name="diagnosis"
                  value={formData.diagnosis}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row full-width">
                <label>Medicines</label>
                <textarea
                  name="medicines"
                  placeholder="Medicine name - dosage - duration"
                  value={formData.medicines}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row full-width">
                <label>Instructions</label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label>Vitals</label>
                <textarea
                  name="vitals"
                  placeholder="BP, Sugar, Temperature..."
                  value={formData.vitals}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label>Tests Suggested</label>
                <textarea
                  name="tests"
                  value={formData.tests}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label>Allergies</label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label>Follow-up Date</label>
                <input
                  type="date"
                  name="followUpDate"
                  value={formData.followUpDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row full-width">
                <label>Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button type="submit" className="primary-btn">
              Save Prescription
            </button>
            <button
              type="reset"
              className="secondary-btn"
              onClick={() =>
                setFormData({
                  prescriptionId: "",
                  patientName: "",
                  patientId: "",
                  age: "",
                  gender: "",
                  doctorName: "",
                  specialization: "",
                  date: "",
                  symptoms: "",
                  diagnosis: "",
                  medicines: "",
                  instructions: "",
                  vitals: "",
                  tests: "",
                  allergies: "",
                  followUpDate: "",
                  notes: "",
                })
              }
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionForm;
