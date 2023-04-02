import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate("/DoctorsProf" );
  };

  const handlePatientClick = () => {
    navigate('/PatientProf');
  };
  return (
    <div className="landing-page">
      <h1>Welcome to the Hospital Appointment System</h1>
      <p>Book your appointments online with ease.</p>
      <p>Please choose your profile below</p>
      <button className='btn' onClick={handleDoctorClick}>Doctor</button>
      <button className='btn' onClick={handlePatientClick}>Patient</button>
    </div>
  );
}

export default Landing;