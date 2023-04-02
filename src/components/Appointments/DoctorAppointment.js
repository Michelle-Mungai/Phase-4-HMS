import React, { useState } from 'react';
import './DoctorAppointment.css';


function DoctorAppointment(props) {
  const [appointment_date, setAppointmentDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      doctor_id: doctor.id,
      appointment_date: appointment_date,
      reason_for_visit: reason
    }
    fetch('https://fnf-s1ab.onrender.com/login', {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

  return (
    <div className="appointment">
      <h2>Book an Appointment</h2>
      <form onSubmit={ e => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={appointment_date} onChange={(e) => setAppointmentDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Reason:</label>
          <input type="time" id="time" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
        <button type="submit" onClick={() => props.onFormSwitch("appointment")}>Book Appointment</button>
      </form>
    </div>
  );
}

export default DoctorAppointment;
