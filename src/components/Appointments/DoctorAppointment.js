import React from 'react';
import PropTypes from 'prop-types';
import './DoctorAppointment.css';

const DoctorAppointment = ({ doctorName, appointmentDate, patientName, isConfirmed }) => (
  <div className="appointment-container">
    <div className="doctor-name">{doctorName}</div>
    <div className="appointment-date">{appointmentDate}</div>
    <div className="patient-name">{patientName}</div>
    <div className={`appointment-status ${isConfirmed ? 'confirmed' : 'not-confirmed'}`}>
      {isConfirmed ? 'Confirmed' : 'Not Confirmed'}
    </div>
  </div>
);

DoctorAppointment.propTypes = {
  doctorName: PropTypes.string.isRequired,
  appointmentDate: PropTypes.string.isRequired,
  patientName: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
};

export default DoctorAppointment;
