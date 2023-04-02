import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const DoctorProf = () => {
  const [name, setName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [specialties, setSpecialties] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLicenseNumberChange = (event) => {
    setLicenseNumber(event.target.value);
  };

  const handleSpecialtiesChange = (event) => {
    setSpecialties(event.target.value.split(','));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const profile = {
      name: name,
      medical_license_number: licenseNumber,
      medical_specialties: specialties,
    };
    fetch('https://fnf-s1ab.onrender.com/doctors', {
        method: "POST",
        body: JSON.stringify(profile)
    })
    .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

  if (isSubmitted) {
    return <Redirect to="../All/CurrentDoctor" />;
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <label htmlFor="licenseNumber">License Number:</label>
      <input type="text" id="licenseNumber" value={licenseNumber} onChange={handleLicenseNumberChange} />

      <label htmlFor="specialties">Medical Specialties:</label>
      <input type="text" id="specialties" value={specialties} onChange={handleSpecialtiesChange} />

      <button type="submit">Create Profile</button>
    </form>
  );
};

export default DoctorProf;
