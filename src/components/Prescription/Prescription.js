import React from 'react';
import './Prescription.css';

function Prescription(props) {
  return (
    <div className="prescription-page">
      <h1>Prescription</h1>
      <div className="prescription-form">
        <label>Patient Name:</label>
        <input type="text" name="patientName" />
        <br />
        <label>Doctor Name:</label>
        <input type="text" name="doctorName" />
        <br />
        <label>Medications:</label>
        <textarea name="medications" rows="10"></textarea>
        <br />
        <label>Notes:</label>
        <textarea name="notes" rows="5"></textarea>
        <br />
        <button type="submit" onClick={() => props.onFormSwitch("appointment")}>Submit</button>
      </div>
    </div>
  );
}

export default Prescription;
