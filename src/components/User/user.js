import React, { useState } from 'react';

function User() {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    fetch('https://fnf-s1ab.onrender.com/user-type', {
      method: 'POST',
      body: JSON.stringify({ userType: event.target.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update user type.');
      }
      if (event.target.value === 'doctor') {
        window.location.href = '/doctor';
      } else if (event.target.value === 'patient') {
        window.location.href = '/patient';
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="auth-wrapper">
          <div className="auth-inner">
      <label>
        <input
          type="radio"
          name="userType"
          value="doctor"
          checked={userType === 'doctor'}
          onChange={handleUserTypeChange}
        />
        Doctor
      </label>
      <label>
        <input
          type="radio"
          name="userType"
          value="patient"
          checked={userType === 'patient'}
          onChange={handleUserTypeChange}
        />
        Patient
      </label>
    </div>
    </div>
  );
}

export default User;
