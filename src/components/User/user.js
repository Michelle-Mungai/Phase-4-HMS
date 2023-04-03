import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css'

function User() {
  const UserType = {
    DOCTOR: 0,
    PATIENT: 1
  };

  const [userType, setUserType] = useState('');
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    const options = event.target.value;
    setUserType(options);
    const userTypeValue = options === 'doctor' ? UserType.DOCTOR : UserType.PATIENT;
    fetch('https://fnf-s1ab.onrender.com/users', {
      method: 'PUT',
      body: JSON.stringify({ userId: userId, userType: userTypeValue }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update user type.');
      }
      if (options === 'doctor') {
        navigate('/doctor');
      } else if (options === 'patient') {
        navigate('/patient');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  useEffect(() => {
    // Make a fetch request to get the user ID from the server.
    fetch('https://fnf-s1ab.onrender.com/signup')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to get user ID.');
        }
        return response.json();
      })
      .then(data => {
        setUserId(data.userId);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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

export default User