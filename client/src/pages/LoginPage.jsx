import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^P\d+/i.test(userId)) {
      setRoleMessage("🔑 Patient login successful. Redirecting...");
      navigate("/patient-dashboard");
    } else if (/^D\d+/i.test(userId)) {
      setRoleMessage("👨‍⚕️ Doctor login successful. Redirecting...");
      navigate("/doctor-dashboard");
    } else if (/^SN\d+/i.test(userId)) {
      setRoleMessage("💉 Nurse login successful. Redirecting...");
      navigate("/staff-dashboard");
    } else if (/^ST\d+/i.test(userId)) {
      setRoleMessage("🧪 Technician login successful. Redirecting...");
      navigate("/staff-dashboard");
    } else if (/^SA\d+/i.test(userId)) {
      setRoleMessage("📋 Admin Staff login successful. Redirecting...");
      navigate("/staff-dashboard");
    } else {
      setRoleMessage("⚠️ Invalid User ID format. Please try again.");
    }

    console.log("ID:", userId, "Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">

        {/* Left - Login Form */}
        <div className="login-form">
          <div className="logo-container">
            <h2>HMS Hospital Portal</h2>
          </div>

          <p className="welcome-text">
            Please log in with your secure credentials
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="userId">User ID</label>
              <input
                id="userId"
                type="text"
                placeholder="e.g., P123 / D456 / SN789"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {roleMessage && <p className="role-message">{roleMessage}</p>}

            <button type="submit" className="btn">Login</button>

            <div className="forgot-password">
              <a href="#!">Forgot password?</a>
            </div>
          </form>
        </div>

        {/* Right - About HMS */}
        <div className="about-section">
          <h3>Welcome to HMS</h3>
          <p>
            Our Hospital Management System ensures secure and efficient access 
            for patients, doctors, and staff. Manage appointments, prescriptions, 
            reports, and administrative tasks with ease.
          </p>
          <br />
          <h4>Who Can Login?</h4>
          <ul>
            <li>👨‍⚕️ Doctors (ID: Dxxx)</li>
            <li>🧑‍🤝‍🧑 Patients (ID: Pxxx)</li>
            <li>💉 Nurses (ID: SNxxx)</li>
            <li>🧪 Technicians (ID: STxxx)</li>
            <li>📋 Admin Staff (ID: SAxxx)</li>
          </ul>
          <p className="tagline">Secure • Reliable • Professional</p>
        </div>

      </div>
    </div>
  );
}
