import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './patient.css'
import Navbar from '../Navbar/Navbar';

function PatientDashboard() {
  const [doctors, setDoctors] = useState([]);
  const [patient, setPatient] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentReason, setAppointmentReason] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [appointmentToUpdate, setAppointmentToUpdate] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    fetchDoctors();
    fetchAppointments();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('https://fnf-s1ab.onrender.com/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`https://fnf-s1ab.onrender.com/patients/${patient.id}/doctors/${doctors.id}/appointments`);
      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleAppointmentDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleAppointmentReasonChange = (event) => {
    setAppointmentReason(event.target.value);
  };

  const handleAppointmentSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`https://fnf-s1ab.onrender.com/patients/${patient.id}/appointments`, {
        doctorId: selectedDoctor,
        appointmentDate,
        appointmentReason
      });
      setAppointments([...appointments, response.data]);
      setSelectedDoctor('');
      setAppointmentDate('');
      setAppointmentReason('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppointmentUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`https://fnf-s1ab.onrender.com/appointments/${appointmentToUpdate.id}`, {
        doctorId: selectedDoctor,
        appointmentDate,
        appointmentReason
      });
      const updatedAppointments = appointments.map(appointment =>
        appointment.id === response.data.id ? response.data : appointment
      );
      setAppointments(updatedAppointments);
      setAppointmentToUpdate(null);
      setSelectedDoctor('');
      setAppointmentDate('');
      setAppointmentReason('');
      setShowUpdateForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppointmentDelete = async (id) => {
    try {
      await axios.delete(`/appointments/${id}`);
      const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateClick = (appointment) => {
    setSelectedDoctor(appointment.doctorId);
    setAppointmentDate(appointment.appointment_date);
    setAppointmentReason(appointment.reason_for_visit);
    setAppointmentToUpdate(appointment);
    setShowUpdateForm(true);
  };

  return (
    <>
    <Navbar/>
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={showUpdateForm ? handleAppointmentUpdate : handleAppointmentSubmit}>
        <label>
          Choose a Doctor:
          <select value={selectedDoctor} onChange={handleDoctorChange}>
            <option value="">Select a Doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
        ))}
      </select>
    </label>
    <label>
      Choose a Date:
      <input type="date" value={appointmentDate} onChange={handleAppointmentDateChange} />
    </label>
    <label>
      Reason for Visit
      <input type="text" value={appointmentReason} onChange={handleAppointmentReasonChange} />
    </label>
    <button type="submit">{showUpdateForm ? 'Update Appointment' : 'Book Appointment'}</button>
    {showUpdateForm && (
      <button type="button" onClick={() => setShowUpdateForm(false)}>Cancel Update</button>
    )}
  </form>
  <h2>Appointments</h2>
  <table>
    <thead>
      <tr>
        <th>Reason for Visit</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {Array.isArray(appointments) && appointments.map(appointment => (
        <tr key={appointment.id}>
          <td>{appointment.reason_for_visit}</td>
          <td>{appointment.appointment_date}</td>
          <td>
            <button type="button" onClick={() => handleUpdateClick(appointment)}>Update</button>
            <button type="button" onClick={() => handleAppointmentDelete(appointment.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</>
  )}

export default PatientDashboard