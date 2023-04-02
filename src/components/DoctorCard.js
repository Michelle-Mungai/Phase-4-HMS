import React from "react";
import { Link } from "react-router-dom";
function DoctorCard({ id, name, medicalNumber, specialties, onBooking }) {
    return (
      <div className="doctor-card">
        <h3>{name}</h3>
        <p>Medical Number: {medicalNumber}</p>
        <p>Specialties: {specialties.join(", ")}</p>
        <Link to={`/DoctorAppointment/${id}`}>Update</Link>
      </div>
    );
  };

  export default DoctorCard