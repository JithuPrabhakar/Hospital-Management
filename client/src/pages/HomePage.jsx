import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <Navbar />
            <div className="glass-container" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>Welcome to City Hospital</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Providing world-class healthcare at your fingertips.</p>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/appointment">
                        <button style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem', background: '#667eea' }}>
                            Book an Appointment
                        </button>
                    </Link>
                    <Link to="/about">
                        <button style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem', background: 'transparent', border: '1px solid #333', color: '#333' }}>
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                <div className="glass-container" style={{ width: '250px' }}>
                    <h3>For Patients</h3>
                    <p>Book appointments securely and get your token online.</p>
                </div>
                <div className="glass-container" style={{ width: '250px' }}>
                    <h3>For Doctors</h3>
                    <p>Manage patients and prescriptions efficiently.</p>
                </div>
                <div className="glass-container" style={{ width: '250px' }}>
                    <h3>For Staff</h3>
                    <p>Streamline hospital operations and admissions.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
