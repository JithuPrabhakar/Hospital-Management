import React from "react";
import Header from "../components/common/Header";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()

  function handlesubmit(e)
  {
    e.preventDefault();
    navigate('/appointment')


  }

  return (
    <>
      <div className="homepage">
        <Header />
        <div>
              <h2 className="homepage-title">
          Welcome to the <span>HMS Management System</span>
           
        </h2>
        <button className="btn-homeappoint" type="submit" onClick={handlesubmit}>Appointment</button>

        </div>
    
      </div>
    </>
  );
};

export default HomePage;
