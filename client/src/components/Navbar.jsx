import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '1rem 2rem', 
            background: 'rgba(255, 255, 255, 0.9)', 
            marginBottom: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Hospital MS</Link>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
                <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
                <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link>
                
                {user ? (
                    <>
                        {user.role === 'admin' && <Link to="/admin-dashboard" style={{ textDecoration: 'none', color: '#333' }}>Dashboard</Link>}
                        {user.role === 'doctor' && <Link to="/doctor" style={{ textDecoration: 'none', color: '#333' }}>Doctor Panel</Link>}
                        {user.role === 'staff' && <Link to="/staff" style={{ textDecoration: 'none', color: '#333' }}>Staff Panel</Link>}
                        <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', background: '#ff4757', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>Logout</button>
                    </>
                ) : (
                    <Link to="/login" style={{ textDecoration: 'none', color: '#333' }}>Login</Link>
                )}
                
                <Link to="/appointment" style={{ padding: '0.5rem 1rem', background: '#667eea', borderRadius: '5px', color: 'white', textDecoration: 'none' }}>Book Appointment</Link>
            </div>
        </nav>
    );
};

export default Navbar;
