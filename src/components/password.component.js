import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Password extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      newPassword: "",
      confirmPassword: "",
      passwordReset: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { newPassword, confirmPassword } = this.state;
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    // save new password to API endpoint
     fetch("https://fnf-s1ab.onrender.com/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // if password reset was successful, update the state with passwordReset set to true
          this.setState({ passwordReset: true });
        } else {
          alert("Failed to reset password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to reset password");
      });
  };

  render() {
    const { passwordReset } = this.state;

    // redirect to sign-in page after successful password reset
    if (passwordReset) {
      return <Navigate to="/sign-in" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="auth-wrapper">
          <div className="auth-inner">
        <h3>Reset Your Password</h3>
        <div className="mb-3">
          <label> Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="New Password"
            name="newPassword"
            value={this.state.newPassword}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Confirm New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn">
            Reset Password
          </button>
        </div>
        </div>
        </div>
      </form>
    );
  }
}