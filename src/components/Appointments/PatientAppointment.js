import React, { useState } from "react";
import "./PatientAppointment.css";

const PatientAppointment = (props) => {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Patient Name: ", patientName);
    console.log("Doctor Name: ", doctorName);
    console.log("Appointment Date: ", appointmentDate);

    // create an object to send as the body of the request
    const appointmentDetails = {
      patientName,
      doctorName,
      appointmentDate,
    };

    // send the appointment details to the server using fetch
    fetch(`https://fnf-s1ab.onrender.com/patients/${props.patientId}/doctors/${props.doctorId}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Appointment created successfully:", data);
      })
      .catch((error) => {
        console.error("Error creating appointment:", error);
      });
  };

  return (
    <div className="appointment">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Patient Name:</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        <label>Doctor Name:</label>
        <input
          type="text"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          required
        />
        <label>Appointment Date:</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default PatientAppointment;
