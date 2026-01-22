import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import Navbar from '../components/Navbar';

const StaffPage = () => {
    const { user } = useContext(AuthContext);
    const [patients, setPatients] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/patient/patient/');
            setPatients(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const updateStatus = async (id, status) => {
        try {
            await axios.put(`http://localhost:8000/api/patient/patient/${id}/`, {
                status: status,
                discharge_date: status === 'Discharged' ? new Date().toISOString().split('T')[0] : null
            });
            fetchPatients();
            setMessage(`Patient marked as ${status}`);
        } catch (err) {
            console.error(err);
            setMessage('Error updating status');
        }
    };
    
    const handleDelete = async (id) => {
        if(!confirm("Are you sure?")) return;
        try {
             await axios.delete(`http://localhost:8000/api/patient/patient/${id}/`);
             fetchPatients();
             setMessage("Patient record deleted");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <Navbar />
            <div className="glass-container">
                <h1>Staff Panel</h1>
                {message && <p style={{ color: 'green' }}>{message}</p>}
                
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', background: 'rgba(255,255,255,0.3)' }}>
                            <th style={{ padding: '0.5rem' }}>Token</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Admitted</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                <td style={{ padding: '0.5rem' }}>{patient.token}</td>
                                <td>{patient.name}</td>
                                <td>
                                    <span style={{ 
                                        padding: '0.2rem 0.5rem', 
                                        borderRadius: '4px',
                                        background: patient.status === 'Discharged' ? '#ffeaa7' : (patient.status === 'Admitted' ? '#55efc4' : '#fab1a0')
                                    }}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td>{patient.admitted_date || '-'}</td>
                                <td style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem' }}>
                                    {patient.status === 'Pending' && (
                                        <button onClick={() => updateStatus(patient.id, 'Admitted')} style={{ fontSize: '0.8rem', padding: '0.3rem' }}>Admit</button>
                                    )}
                                    {patient.status === 'Admitted' && (
                                        <button onClick={() => updateStatus(patient.id, 'Discharged')} style={{ fontSize: '0.8rem', padding: '0.3rem', background: '#e17055' }}>Discharge</button>
                                    )}
                                    <button onClick={() => handleDelete(patient.id)} style={{ fontSize: '0.8rem', padding: '0.3rem', background: '#d63031' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StaffPage;
