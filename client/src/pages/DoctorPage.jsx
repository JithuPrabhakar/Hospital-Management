import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import "./DoctorPage.css";

const DoctorPage = () => {
    const { user } = useContext(AuthContext);
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [prescriptionText, setPrescriptionText] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) fetchPatients();
    }, [user]);

    const fetchPatients = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/patient/patient/');
            // Filter patients assigned to this doctor if user.role is doctor (and we have doctor_id)
            // For demo, we might show all or filter by doctor name if stored
            setPatients(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handlePrescriptionSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/doctor/add-prescription/', {
                doctor: user.doctor_id, // Assuming user context has this or we need to fetch it
                patient: selectedPatient.id,
                prescription_text: prescriptionText
            }, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
            setMessage('Prescription added successfully');
            setSelectedPatient(null);
            setPrescriptionText('');
        } catch (err) {
            // If doctor_id is missing in auth, we might fallback or error
            // For simplicity in this demo, let's assume we can pick a doctor or current user is linked
            console.error(err);
            setMessage('Error adding prescription. Ensure you are a valid doctor.');
        }
    };

    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <Navbar />
            <div className="glass-container">
                <h1>Doctor Panel</h1>
                {message && <p style={{ color: 'green' }}>{message}</p>}
                
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ flex: 1 }}>
                        <h3>My Patients</h3>
                        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            {patients.map(patient => (
                                <div key={patient.id} style={{ 
                                    padding: '1rem', 
                                    marginBottom: '1rem', 
                                    background: 'rgba(255,255,255,0.5)', 
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    border: selectedPatient?.id === patient.id ? '2px solid #667eea' : 'none'
                                }} onClick={() => setSelectedPatient(patient)}>
                                    <p><strong>Name:</strong> {patient.name}</p>
                                    <p><strong>Age:</strong> {new Date().getFullYear() - new Date(patient.date_of_birth).getFullYear()}</p>
                                    <p><strong>Status:</strong> {patient.status}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div style={{ flex: 1 }}>
                        {selectedPatient ? (
                            <div className="glass-container" style={{ margin: 0 }}>
                                <h3>Prescribe for {selectedPatient.name}</h3>
                                <form onSubmit={handlePrescriptionSubmit}>
                                    <textarea 
                                        value={prescriptionText}
                                        onChange={(e) => setPrescriptionText(e.target.value)}
                                        rows="5"
                                        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                                        placeholder="Enter prescription details..."
                                    ></textarea>
                                    <button type="submit">Submit Prescription</button>
                                </form>
                            </div>
                        ) : (
                            <p>Select a patient to prescribe.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorPage;
