import React from 'react';
import './components/Appointments/DoctorAppointment.css';

const DoctorAppointment = ({ patientName, doctorName, date, time }) => {
  return (
    <div className="appointment-container">
      <h2>Doctor's Appointment</h2>
      <div className="appointment-details">
        <p>Patient: {patientName}</p>
        <p>Doctor: {doctorName}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
      </div>
    </div>
  );
};

export default DoctorAppointment;
