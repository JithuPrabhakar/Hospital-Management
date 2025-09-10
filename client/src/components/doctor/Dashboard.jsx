import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
  <div>
      
    <div className="dash-overview">
    
      <div className="dash-menu">
        <h1>Doctor Dashboard</h1>
        <ul className="dash-list">
          <li><Link to="">Overview</Link></li>
           <li><Link to="">Appointments</Link></li>
            <li><Link to="">Patients Details</Link></li>
        </ul>
      </div>
      <div className="dash-details">
        <h3>Welcome Doctor ....!!!!</h3>

      </div>
    </div>
    
  </div>
    )
};

export default Dashboard;
