import React from 'react';
import "./Prescription.css"

const Prescription = ({ patientName, doctorName, medicines }) => {
  return (
    <div className="prescription">
      <h2>Prescription</h2>
      <div className="details">
        <p><strong>Patient Name:</strong> {patientName}</p>
        <p><strong>Doctor Name:</strong> {doctorName}</p>
      </div>
      <div className="medicines">
        <h3>Medicines:</h3>
        <ul>
          {medicines.map((medicine, index) => (
            <li key={index}>{medicine}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Prescription;