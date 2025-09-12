import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  function handleAppointment(e)
  {
    e.preventDefault();
    navigate('/appointment')


  }
  function handleStatus(e)
  {
    e.preventDefault();
    
    navigate('/patient')


  }

  return (
    <>
      <div className="header-bar">
        <div className="logo-part">
          <h1>HMS</h1>
          <h4 className="sub-text">Health Solutions</h4>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Doctors</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li>
              <button className="btn-appoint" type="submit" onClick={handleAppointment}>Appointment</button>
            </li>
            <li>
              <button className="btn-status" type="submit" onClick={handleStatus}>Check Status</button>
            </li>
            {/* <li><Link to="/dashboard">Doctor Login</Link></li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
