import Navbar from "../components/Navbar";

const ContactPage = () => {
    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <Navbar />
            <div className="glass-container">
                <h1>Contact Us</h1>
                <p>Have questions? Reach out to us!</p>
                <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <strong>Email:</strong> <span>admin@hospital.com</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <strong>Phone:</strong> <span>+1 234 567 8900</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <strong>Address:</strong> <span>123 Health St, Wellness City</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
