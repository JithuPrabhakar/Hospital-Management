import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import "./DoctorPage.css"; // reuse the same CSS

const StaffPage = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/staff/staff/")
      .then((res) => res.json())
      .then((data) => setStaff(data))
      .catch((err) => console.error("Error fetching staff:", err));
  }, []);

  // Group staff by role (Nurse, Technician, etc.)
  const groupedStaff = staff.reduce((groups, member) => {
    const role = member.role;
    if (!groups[role]) groups[role] = [];
    groups[role].push(member);
    return groups;
  }, {});

  // Helper function to check availability
  const isAvailable = (shiftStart, shiftEnd) => {
    if (!shiftStart || !shiftEnd) return false;

    const now = new Date();
    const currentHour = now.getHours();

    const start = parseInt(shiftStart.split(":")[0], 10); // e.g. "09:00:00" → 9
    const end = parseInt(shiftEnd.split(":")[0], 10);     // e.g. "17:00:00" → 17

    // Handle overnight shifts (e.g. 23 → 5)
    if (start > end) {
      return currentHour >= start || currentHour < end;
    }
    return currentHour >= start && currentHour < end;
  };

  return (
    <>
      <Header />
      <h1 className="doctor-title">OUR STAFFS</h1>
      <div className="doctor-container">
        {Object.keys(groupedStaff).length === 0 ? (
          <p>No staff available</p>
        ) : (
          Object.keys(groupedStaff).map((role) => (
            <div key={role} className="specialization-group">
              <h2 className="spec-title">{role}</h2>
              <div className="spec-doctors">
                {groupedStaff[role].map((member) => {
                  const available = isAvailable(member.shift_start, member.shift_end);
                  return (
                    <div className="doctor-card" key={member.id}>
                      <h3>{member.name}</h3>
                      <p className="qualification">ID: {member.staff_id}</p>
                      <p className="qualification">Phone: {member.phone_number}</p>

                      <button
                        className={`availability-btn ${
                          available ? "available" : "not-available"
                        }`}
                        disabled
                      >
                        {available ? "Available" : "Not Available"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default StaffPage;
