import React, { useState, useEffect } from 'react';
import './doctor.css'

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    // Fetch patients from API
    fetch('https://fnf-s1ab.onrender.com/pat')
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
        .then(data => setMedicalRecords(data));
      
      setSelectedAppointment(null);
    }
  }, [selectedPatient]);

   const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const handleAppointmentSelect = (appointment) => {
    setSelectedAppointment(appointment);
  };

 const handleAppointmentUpdate = (updatedAppointment) => {
    // Update appointment in API
    fetch(`api/appointments/${updatedAppointment.id}`, {
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
    fetch(`api/appointments/${appointment.id}`, {
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
    <div className='doctor'>
      <h1>Doctor Dashboard</h1>
      <h2>Patients</h2>
      {Array.isArray(patients)? (
  <p>No patients found.</p>
) : (
      <ul>
        {/* {console.log(patients)} */}
        {Array.isArray(patients) && patients.map(patient => (
          <li key={patient.id} onClick={() => handlePatientSelect(patient)}>
            {patient.name}
          </li>
        ))}
      </ul>
)}
      {selectedPatient && (
        <>
          <h2>Appointments for {selectedPatient.name}</h2>
          <ul>
            {appointments.map(appointment => (
              <li key={appointment.id} onClick={() => handleAppointmentSelect(appointment)}>
                {appointment.date} at {appointment.time}
              </li>
            ))}
          </ul>
          {selectedAppointment && (
            <>
              <h3>Medical Records for {selectedPatient.name}</h3>
              <ul>
                {medicalRecords.map(record => (
                  <li key={record.id}>
                    {record.date}: {record.note}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleAppointmentCancel(selectedAppointment)}>Cancel Appointment</button>
              <button onClick={() => handleAppointmentUpdate({...selectedAppointment, status: 'completed'})}>Mark as Completed</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DoctorDashboard
