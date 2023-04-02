import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CurrentPatient() {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fnf-s1ab.onrender.com/pat')
    .then(response => response.json())
    .then(data => {
      setLoading(false)
        setPatientData(data);
      })
    .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!patientData) {
    return <div>Not found.</div>;
  }

  return (
    <div>
      <h1>Patient Data</h1>
      <p>Name: {patientData.name}</p>
      <p>Age: {patientData.age}</p>
      <p>Gender: {patientData.gender}</p>
      <p>Address: {patientData.address}</p>
      {/* display more patient data as needed */}
      <Link to="/Doctors">View all doctors</Link>
    </div>
  );
};

export default CurrentPatient;
