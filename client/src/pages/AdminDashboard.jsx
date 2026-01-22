import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/admin/dashboard/', {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                setStats(response.data);
            } catch (err) {
                console.error("Error fetching stats:", err);
            }
        };
        fetchStats();
    }, [user]);

    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <Navbar />
            <div className="glass-container">
                <h1>Admin Dashboard</h1>
                {stats ? (
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                        <div style={{ flex: '1', minWidth: '200px', background: 'rgba(255,255,255,0.4)', padding: '1.5rem', borderRadius: '10px' }}>
                            <h3>Total Doctors</h3>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.doctor_count}</p>
                        </div>
                        <div style={{ flex: '1', minWidth: '200px', background: 'rgba(255,255,255,0.4)', padding: '1.5rem', borderRadius: '10px' }}>
                            <h3>Total Staff</h3>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.staff_count}</p>
                        </div>
                        <div style={{ flex: '1', minWidth: '200px', background: 'rgba(255,255,255,0.4)', padding: '1.5rem', borderRadius: '10px' }}>
                            <h3>Total Patients</h3>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.patient_count}</p>
                        </div>
                        <div style={{ flex: '1', minWidth: '200px', background: 'rgba(255,255,255,0.4)', padding: '1.5rem', borderRadius: '10px' }}>
                            <h3>Pending Patients</h3>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.pending_patients}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading stats...</p>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
