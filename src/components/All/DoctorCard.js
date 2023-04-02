const DoctorCard = ({ name, medicalNumber, specialties, onBooking }) => {
    return (
      <div className="doctor-card">
        <h3>{name}</h3>
        <p>Medical Number: {medicalNumber}</p>
        <p>Specialties: {specialties.join(", ")}</p>
        <Link to={`/D/${key}`}>Update</Link>
      </div>
    );
  };