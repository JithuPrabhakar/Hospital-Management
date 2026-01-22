import { useEffect, useState } from 'react'
import Navbar from "../Navbar"
import axios from 'axios';

const Appointment = () => {
    const [doctors,setDoctors]=useState([])
    const [selectedDoctor,setSelectedDoctor]=useState("")
    const [formData, setFormData] = useState({
        name: "",
        date_of_birth: "",
        gender: "",
        phone_number: "",
        email: "",
        blood_group: "",
        address: "",
        admitted_date: "",
        discharge_date: "",
        allergies: "",
    }); 
    const [token, setToken] = useState(null);

    async function fetchData()
    {
        try {
            const response = await axios.get("http://localhost:8000/api/doctor/doctor/");
            setDoctors(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(()=>
    {
        fetchData();
    },[]);

    const handleInputChange=(e) =>
    {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    async function handleSubmit(e)
    {
        e.preventDefault();
        const selectedDoc = doctors.find(
            (doc) => doc.id === parseInt(selectedDoctor)
        );
        const appdetails = {
            ...formData,
            doctor_name: selectedDoc? selectedDoc.name : "",
            doctor_specialization: selectedDoc ? selectedDoc.specialization : "",
            admitted_date: formData.admitted_date || null,
            discharge_date: formData.discharge_date || null,
        }
        
        try {
            const response = await axios.post("http://localhost:8000/api/patient/patient/", appdetails);
            if (response.status === 201) {
                setToken(response.data.token);
                alert(`Appointment booked successfully! Your Token is: ${response.data.token}`);
            }
        } catch (err) {
            console.error(err);
            alert("Error booking appointment");
        }
    }

    const handleReset= ()=>
    {
        setFormData({
            name: "",
            date_of_birth: "",
            gender: "",
            phone_number: "",
            email: "",
            blood_group: "",
            address: "",
            admitted_date: "",
            discharge_date: "",
            allergies: "",
        });
        setSelectedDoctor("");
        setToken(null); 
    }

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
    <Navbar/>
    <div className="glass-container">
    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Book An Appointment</h2>

       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
       <div className="form-row">
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your full name" name="name" required value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
       </div>

      <div className="form-row">
       <label>Date of Birth:</label>
       <input type="date" name="date_of_birth" required value={formData.date_of_birth} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} /> 
      </div>
      
       <div className="form-row">
       <label>Gender:</label>
       <select name="gender" required value={formData.gender} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
        <option value="">-- Select Gender --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
       </select>
       </div>
       
       <div className="form-row">
       <label>Email:</label>
       <input type="email" name="email" placeholder="you@example.com" required value={formData.email} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} /> 
       </div>
       
        <div className="form-row">
       <label>Phone Number:</label>
       <input type="tel" name="phone_number" placeholder="+1234567890" required value={formData.phone_number} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} /> 
       </div>
       
        <div className="form-row">
       <label>Blood Group:</label>
       <select name="blood_group" required value={formData.blood_group} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
        <option value="">-- Select Blood Group --</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
       </select> 
       </div>
       
      <div className="form-row">
       <label>Address:</label>
       <textarea placeholder="Enter your address here" name="address" value={formData.address} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} /> 
       </div>
       
      <div className="form-row">
       <label>Allergies:</label>
       <textarea placeholder="Allergies (optional)" name="allergies" value={formData.allergies} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
       </div>

      <div className="form-row">
      <label>Select Doctor:</label>
      <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
        <option value="">-- Select Doctor (Optional) --</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>
            {doctor.name} ({doctor.specialization})
          </option>
        ))}
      </select> 
      </div>
      
    <div className="form-row" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
      <button type="submit" style={{ background: '#667eea', flex: 1 }}>Book Appointment</button>
      <button type='button' onClick={handleReset} style={{ background: '#ff4757', flex: 1 }}>Clear</button>
      </div>
    </form>
    
    {token && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#d1fae5', color: '#065f46', borderRadius: '5px', textAlign: 'center' }}>
            <h3>Your Appointment Token</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{token}</p>
            <p>Please save this token for future reference.</p>
        </div>
    )}

    </div>
    </div>
  )
}

export default Appointment