import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Password from './components/password.component';
import Navbar from './components/Navbar/Navbar';
import DoctorAppointment from './components/Appointments/DoctorAppointment';
import PatientAppointment from './components/Appointments/PatientAppointment';
import Prescription from './components/Prescription/Prescription';

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
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/password" element={<Password/>}/>
              <Route path="/navbar" element={<Navbar/>}/>
              <Route path="/doctor" element={<DoctorAppointment/>}/>
              <Route path="/patient" element={<PatientAppointment/>}/>
              <Route path="/prescription" element={<Prescription/>}/>
            </Routes>
          </div>
        {/* </div>
      </div> */}
    </Router>
  );
}

export default App;