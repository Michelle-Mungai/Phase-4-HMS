import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";

function Doctors() {
    const [doctorsData, setDoctorsData] = useState([]);
  
    useEffect(() => {
      fetch("https://fnf-s1ab.onrender.com/doctors")
        .then((response) => response.json())
        .then((data) => setDoctorsData(data))
        .catch((error) => console.log(error));
    }, []);
  

const handleBooking = (id) => {
    // Send a booking request to the server using the selected doctor's id.
  };

  return (
    <div className="doctors-page">
      {doctorsData.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          id={doctor.id}
          name={doctor.name}
          medicalNumber={doctor.medical_license_number}
          specialties={doctor.medical_specialties}
          onBooking={() => handleBooking(doctor.id)}
        />
      ))}
    </div>
  );
};

export default Doctors;
