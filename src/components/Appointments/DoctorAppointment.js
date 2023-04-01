import React, { useState } from 'react';
import './DoctorAppointment.css';


function DoctorAppointment(props) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to submit the form data
  }

  return (
    <div className="appointment">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <button type="submit" onClick={() => props.onFormSwitch("appointment")}>Book Appointment</button>
      </form>
    </div>
  );
}

export default DoctorAppointment;
