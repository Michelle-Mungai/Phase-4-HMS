import React, { useState, useEffect } from 'react';
import './doctor.css'
import Navbar from '../Navbar/Navbar'

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    // Fetch patients from API
    fetch('https://fnf-s1ab.onrender.com/patients')
      .then(res => res.json())
      .then(data => setPatients(data));
  }, [])

    useEffect(() => {
    if (selectedPatient) {
      // Fetch appointments for selected patient from API
      fetch(`https://fnf-s1ab.onrender.com/patients/${selectedPatient.id}/appointments`)
        .then(res => res.json())
        .then(data => setAppointments(data));

   // Fetch medical records for selected patient from API
      fetch(`https://fnf-s1ab.onrender.com/patients/${selectedPatient.id}/medical_record`)
        .then(res => res.json())
        .then(data => console.log(data));
        // .then(data => setMedicalRecords(data));
      
      setSelectedAppointment(null);
    }
  // }, console.log(selectedPatient));
  }, [selectedPatient]);

   const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const handleAppointmentSelect = (appointment) => {
    setSelectedAppointment(appointment);
  };

 const handleAppointmentUpdate = (updatedAppointment) => {
    // Update appointment in API
    fetch(`https://fnf-s1ab.onrender.com/appointments/${updatedAppointment.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedAppointment),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // Update appointments state
        const updatedAppointments = appointments.map(appointment => {
          if (appointment.id === data.id) {
            return data;
          } else {
            return appointment;
          }
        });
        setAppointments(updatedAppointments);
        setSelectedAppointment(null);
      });
  };

  const handleAppointmentCancel = (appointment) => {
    // Delete appointment in API
    fetch(`https://fnf-s1ab.onrender.com/appointments/${appointment.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        // Update appointments state
        const updatedAppointments = appointments.filter(a => a.id !== appointment.id);
        setAppointments(updatedAppointments);
        setSelectedAppointment(null);
      });
  };

  return (
    <>
    <Navbar/>
    <div className='doctor'>
      <h1>Doctor Dashboard</h1>
      <h2>Patients</h2>
      {/* {Array.isArray(patients)? (
  <p>No patients found.</p>
) : ( */}
      <ul>
        {/* {console.log(patients)} */}
        {Array.isArray(patients) && patients.map(patient => (
          <li key={patient.id} onClick={() => handlePatientSelect(patient)}>
            {patient.name}
          </li>
        ))}
      </ul>
{/* )} */}
      {selectedPatient && (
        <>
         <h3>Medical Records for {selectedPatient.name}</h3>
              <ul>
                {Array.isArray(medicalRecords) && medicalRecords.map(record => (
                  <li key={record.id}>
                    {record.medical_history} : {record.diagnoses} : {record.treatment}
                  </li>
            ))}
          </ul>

            <>
              <h2>Appointments for {selectedPatient.name}</h2>
          <ul>
            {Array.isArray(appointments) && appointments.map(appointment => (
              <li key={appointment.id} onClick={() => handleAppointmentSelect(appointments)}>
                {appointment.reason_for_visit} on {appointment.appointment_date}
              </li>
                ))}
              </ul>
              <button onClick={() => handleAppointmentCancel(selectedAppointment)}>Cancel Appointment</button>
              <button onClick={() => handleAppointmentUpdate({...selectedAppointment, status: 'completed'})}>Mark as Completed</button>
            </>
        </>
      )}
    </div>
    </>
  );
};

export default DoctorDashboard
