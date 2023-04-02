import React, { useState, useEffect } from 'react';

function CurrentDoctor() {
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fnf-s1ab.onrender.com/doc')
    .then(response => response.json())
    .then(data => {
        setDoctorData(data);
      })
    .catch((error) => {
        console.error('Error:', error);
      });
    

    fetchData();
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
      <p>Name: {doctor.name}</p>
      <p>Age: {doctor.medical_license_number}</p>
      <p>Gender: {doctor.medical_specialties}</p>
      <p>Address: {patientData.address}</p>
      <Link to="/Patients">View all Patients</Link>
    </div>
  );
};

export default CurrentDoctor;
