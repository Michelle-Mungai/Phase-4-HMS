import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Password from './components/password.component';
import Navbar from './components/Navbar';
import DoctorAppointment from './components/DoctorAppointment';
import PatientAppointment from './components/PatientAppointment';
import Prescription from './components/Prescription';
import CurrentDoctor from './components/CurrentDoctor';
import CurrentPatient from './components/CurrentPatient';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import DoctorProf from './components/DoctorsProf';
import PatientProf from './components/PatientProf';
import Landing from './components/Landing';

function App() {
  return (
  <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              HOSPITAL MANAGEMENT
            </Link>
            {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div> */}
          {/* </div> */}
        {/* </nav>  */}
        {/* <div className="auth-wrapper">
          <div className="auth-inner"> */}
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/Landing" element={<Landing />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/password" element={<Password/>}/>
              <Route path="/navbar" element={<Navbar/>}/>
              <Route path="/DoctorAppointment/:id" element={<DoctorAppointment/>}/>
              <Route path="/PatientAppointment" element={<PatientAppointment/>}/>
              <Route path="/prescription" element={<Prescription/>}/>
              <Route path="/doctors" element={<Doctors/>}/>
              <Route path="/patients" element={<Patients/>}/>
              <Route path="/CurrentDoctor" element={<CurrentDoctor/>}/>
              <Route path="/CurrentPatient" element={<CurrentPatient/>}/>
              <Route path="/DoctorsProf" element={<DoctorProf/>}/>
              <Route path="/PatientProf" element={<PatientProf/>}/>

            </Routes>
          </div>
        {/* </div>
      </div> */}
    </Router>
  );
}

export default App;