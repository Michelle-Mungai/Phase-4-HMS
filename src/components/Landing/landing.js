import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/patient');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Hospital Appointment System</h1>
      <p>Book your appointments online with ease.</p>
      <button className='btn' onClick={handleButtonClick}> BOOK NOW </button>
    </div>
  );
}

export default LandingPage;
