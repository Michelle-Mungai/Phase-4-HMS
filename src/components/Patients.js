import React, { useState, useEffect } from "react";
import PatientCard from "./PatientCard";

function Patients() {
    const [PatientsData, setPatientsData] = useState([]);
  
    useEffect(() => {
      fetch("https://fnf-s1ab.onrender.com/patients")
        .then((response) => response.json())
        .then((data) => setPatientsData(data))
        .catch((error) => console.log(error));
    }, []);

  return (
    <div className="doctors-page">
      {PatientsData.map((patient) => (
        <PatientCard
          key={patient.id}
          name={patient.name}
          medicalNumber={patient.medicalNumber}
          specialties={patient.specialties}
        />
      ))}
    </div>
  );
};

export default Patients;
