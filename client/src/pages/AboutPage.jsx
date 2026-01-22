import Navbar from "../components/Navbar";

const AboutPage = () => {
    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <Navbar />
            <div className="glass-container">
                <h1>About Us</h1>
                <p>Welcome to our Hospital Management System demo.</p>
                <p>We provide state-of-the-art healthcare services managed efficiently through this platform.</p>
                <div style={{ marginTop: '2rem' }}>
                    <h3>Our Features</h3>
                    <ul>
                        <li>Streamlined Patient Appointment Booking</li>
                        <li>Digital Prescriptions from Expert Doctors</li>
                        <li>Efficient Staff Management</li>
                        <li>Admin Dashboard for Overview</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
