import React from "react";
import Header from "../components/common/Header";

const DoctorPage = () => {
  return (
    <>
      <Header />
       <h1>Our Doctors</h1>
       
       {doctor.map((doctor)=>
      (
         <div className="doctor-details" key={doctor.id}>
         <h4>Name :{doctor.name} </h4>
        <h4>Specialization :{doctor.specialization} </h4>
        <h4>Qualification : </h4>
        <h4>Availability : </h4>
        
 </div>
      ))}
     
       
       
     
      

      
    </>
  );
};

export default DoctorPage;
