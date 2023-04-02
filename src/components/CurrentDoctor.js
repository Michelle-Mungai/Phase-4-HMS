import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CurrentDoctor() {
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fnf-s1ab.onrender.com/doc')
    .then(response => response.json())
    .then(data => {
      setLoading(false)
        setDoctorData(data);
      })
    .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!doctorData) {
    return <div>You do not have access to this profile.</div>;
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <p>Name: {doctorData.name}</p>
      <p>Age: {doctorData.medical_license_number}</p>
      <p>Gender: {doctorData.medical_specialties}</p>
      <p>Address: {doctorData.address}</p>
      <Link to="/Patients">View all Patients</Link>
    </div>
  );
};

export default CurrentDoctor;
