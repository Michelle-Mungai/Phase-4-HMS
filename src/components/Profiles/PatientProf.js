import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const PatientProf = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleContactInfoChange = (event) => {
    setContactInfo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const patientData = {
      name: name,
      date_of_birth: dateOfBirth,
      cotact_information: contactInfo,
    };
    fetch('https://fnf-s1ab.onrender.com/patients', {
        method: "POST",
        body: JSON.stringify(patientData)
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
    return <Redirect to="../All/CurrentPatient" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <label htmlFor="dateOfBirth">Date of Birth:</label>
      <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={handleDateOfBirthChange} />

      <label htmlFor="contactInfo">Contact Information:</label>
      <input type="text" id="contactInfo" value={contactInfo} onChange={handleContactInfoChange} />

      <button type="submit">Create Profile</button>
    </form>
  );
};

export default PatientProf;
