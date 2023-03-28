import React, { Component } from "react";
export default class Login extends Component {
    render() {
        return (
            <form>
        <h3>Sign In</h3>
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="sign-up text-left">
          Don't have an account <a href="/sign-up">sign up?</a>
        </p>
        <p className="forgot-password text-right">
          Forgot <a href="/password"> password?</a>
        </p>
      </form>
        );
    }
}