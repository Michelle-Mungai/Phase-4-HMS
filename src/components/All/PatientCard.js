import React from "react";
import { Link } from "react-router-dom";

function PatientCard({ name, medicalNumber, specialties, onBooking }) {


    return (
      <div className="doctor-card">
        <h3>{name}</h3>
        <p>Medical Number: {medicalNumber}</p>
        <p>Specialties: {specialties.join(", ")}</p>
      </div>
    );
  };

export default PatientCard;