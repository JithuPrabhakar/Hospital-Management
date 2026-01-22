import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";

const TokenPage = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [patientData, setPatientData] = useState(null);
  const navigate = useNavigate();

  async function handleCheckToken() {
    if (!token.trim()) {
      setError("Enter a valid token");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8000/api/patient/validate-token/${token}/`);
      if (response.status === 200) {
        setPatientData(response.data);
        setError("");
      }
    } catch (err) {
      console.error("Error while validating token:", err);
        setError("Invalid token or Server Error.");
        setPatientData(null);
    }
  }

  return (
   <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
    <Navbar/>
    <div className="glass-container" style={{ textAlign: 'center' }}>
    <h2 style={{ marginBottom: '1rem' }}>Check Appointment Status</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <input
            type="text"
            placeholder="Enter your token"
            value={token}
            onChange={(e) => {
            setToken(e.target.value);
            setError("");
            }}
            style={{ padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" onClick={handleCheckToken} style={{ background: '#667eea' }}>
            Verify Token
        </button>
    </div>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {patientData && (
          <div style={{ marginTop: '2rem', textAlign: 'left', background: 'rgba(255,255,255,0.5)', padding: '2rem', borderRadius: '10px' }}>
              <h3>Patient Details</h3>
              <p><strong>Name:</strong> {patientData.name}</p>
              <p><strong>Status:</strong> {patientData.status}</p>
              <p><strong>Doctor:</strong> {patientData.doctor_name}</p>
              <p><strong>Date:</strong> {patientData.admitted_date || 'Pending'}</p>
          </div>
      )}
    </div>
    </div>
  );
};

export default TokenPage;
