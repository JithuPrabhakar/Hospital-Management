import React, { useEffect, useState } from 'react'
import Header from "../common/Header"

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
        const response = await fetch("http://127.0.0.1:8000/api/doctor/doctor/");
        console.log(response)
        const data=await response.json();
        console.log(data)
        setDoctors(data)
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
        const appdetails = {
            ...formData,
            doctor:selectedDoctor,
            admitted_date: formData.admitted_date || null,
            discharge_date: formData.discharge_date || null,
        }
        const response = await fetch("http://127.0.0.1:8000/api/patient/patient/",{
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(appdetails),
    })
    const data = await response.json()
    console.log(data)

    if (response.ok) {
        setToken(data.token);
        alert(`Appointment booked successfully! Your Token is: ${data.token}`);
    } else {
        alert(`Error: ${JSON.stringify(data)}`);
    }
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
})
setSelectedDoctor("")
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
    <>
    <Header/>
    <h2 className='app-title'>Booking An Appointment</h2>

    <div className='pa-appoint'>
        
       <form onSubmit={handleSubmit}>
        
       <div className="form-row">
        <label htmlFor="">Full Name :</label>
  <input
    type="text"
    placeholder="Enter your full name"
    name="name"  // Fixed key here
    required
    value={formData.name}
    onChange={handleInputChange}
  />
  </div>

  <div className="form-row">
   <label htmlFor="">Date of Birth:</label>

  <input
    type="date"
    name="date_of_birth"  // Fixed key here
    required
    value={formData.date_of_birth}
    onChange={handleInputChange}
  /> </div>
   <div className="form-row">
   <label htmlFor="">Gender :</label>

  <select
    id="gender"
    name="gender"
    required
    value={formData.gender}
    onChange={handleInputChange}
  >
    <option value="">-- Select Gender --</option>
    <option value="Male">Male</option> {/* Match exact model choices */}
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
  </div>
   <div className="form-row">
   <label htmlFor="">Email :</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="you@example.com"
    required
    value={formData.email}
    onChange={handleInputChange}
  /> </div>
    <div className="form-row">
   <label htmlFor="">Phone Number :</label>

  <input
    type="tel"
    id="phone_number"  // Fixed key here
    name="phone_number"
    placeholder="+1234567890"
    required
    value={formData.phone_number}
    onChange={handleInputChange}
  /> </div>
    <div className="form-row">
   <label htmlFor="">Blood Group :</label>

  <select
    id="blood_group"
    name="blood_group"
    required
    value={formData.blood_group}
    onChange={handleInputChange}
  >
    <option value="">-- Select Blood Group --</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
  </select> </div>
  <div className="form-row">
   <label htmlFor="">Address :</label>

  <textarea
    id="address"
    placeholder="Enter your address here"
    name="address"
    value={formData.address}
    onChange={handleInputChange}
  /> </div>
    <div className="form-row">
   <label htmlFor="">Admitted Date :</label>

  <input
    type="date"
    id="admitted_date"
    name="admitted_date"
    value={formData.admitted_date}
    onChange={handleInputChange}
  /> </div>
  <div className="form-row">
  <label htmlFor="">Discharged Date :</label>

  <input
    type="date"
    id="discharge_date"
    name="discharge_date"
    value={formData.discharge_date}
    onChange={handleInputChange}
  /></div>
  <div className="form-row">
  <label htmlFor="">Allergies :</label>

  <textarea
    id="allergies"
    placeholder="Allergies (optional)"
    name="allergies"
    value={formData.allergies}
    onChange={handleInputChange}
  /></div>

  
  <div className="form-row">
  <label>Select Doctor:</label>
  <select
    value={selectedDoctor}
    onChange={(e) => setSelectedDoctor(e.target.value)}
    required
  >
    <option value="">-- Select Doctor --</option>
    {doctors.length === 0 ? (
    <option value="">No doctors available</option>
) :
    doctors.map((doctor) => (
      <option key={doctor.id} value={doctor.id}>
        {doctor.name} ({doctor.specialization} - {doctor.availability})
      </option>
    ))}
  </select> </div>
<div className="form-row">
  <button type="submit">Book Appointment</button>
  <button type='button' onClick={handleReset}>Clear</button>
  </div>
</form>


    </div>
    </>
  )
}

export default Appointment