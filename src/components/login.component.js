import React from "react";
import { useState } from "react";
// import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    }
    fetch('https://fnf-s1ab.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.error === "Invalid username or password") {
        alert("Wrong password")
      } else {
        navigate('/navbar');
      }
    })
      .catch((error) => {
        console.error('Error:', error);
      });
      //   if (password !== apiPassword) {
      //     alert("Incorrect password");
      //   } else {
      //     // Perform sign up logic here, e.g. make API request to create user account
      //     // Once sign up is successful, navigate to the login page
      //     navigate("/login");
      //   }
      // })
      };
    return (
      <form className="login-form" onSubmit={ e => handleSubmit(e)}>
        <div className="auth-wrapper">
          <div className="auth-inner">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="sign-up text-left" onClick={() => this.props.onFormSwitch("sign up")}>
          Don't have an account <a href="/sign-up">sign up?</a>
        </p>
        <p className="forgot-password text-right">
          Forgot <a href="/password"> password?</a>
        </p>
        </div>
        </div>
      </form>
    );
}