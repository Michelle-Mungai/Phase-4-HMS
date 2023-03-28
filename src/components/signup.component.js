import React, { Component } from "react";
export default class SignUp extends Component {
    render(props) {
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
        return (
            <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" required/>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
        <button className="forgot-password text-right" onClick={() => props.onFormSwitch("login")}>
          Already registered <a href="/sign-in">sign in?</a>
        </button>
      </form>
        );
    }
}