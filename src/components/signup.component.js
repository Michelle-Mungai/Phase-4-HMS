import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      // Perform sign up logic here, e.g. make API request to create user account
      // Once sign up is successful, navigate to the login page
      navigate("/login");
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="auth-wrapper">
          <div className="auth-inner">
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
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
      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right" onClick={() => props.onFormSwitch("login")}>
        Already registered <a href="/login">sign in?</a>
      </p>
      </div>
      </div>
    </form>
  );
}
