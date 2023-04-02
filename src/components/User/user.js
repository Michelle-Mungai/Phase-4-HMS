import React, { useState } from 'react';
import './user.css'

function User() {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (event) => {
    const selectedUserType = event.target.value;
    setUserType(selectedUserType);
    fetch('https://fnf-s1ab.onrender.com/signup', {
      method: 'POST',
      body: JSON.stringify({ userType: selectedUserType }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update user type.');
      }
      if (selectedUserType === 'doctor') {
        window.location.href = '/doctor';
      } else if (selectedUserType === 'patient') {
        window.location.href = '/patient';
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className='useroption'>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h2> Access the site as? </h2>
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
    </div>
  );
}

export default User;
