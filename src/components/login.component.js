import React, { Component } from "react";
import axios from 'axios'
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      // apiPassword: "", // password retrieved from the API
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password
    }
    axios.post('https://fnf-s1ab.onrender.com/login', data)
    .then (res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
    // compare the entered password with the API password
  //   if (this.state.password === this.state.apiPassword) {
  //     // navigate to the home page
  //     // replace the following line with your navigation code
  //     return <Navigate to="/navbar" />;
  //   } else {
  //     alert("Incorrect password");
  //   }
  // };
  }
    render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="auth-wrapper">
          <div className="auth-inner">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            required
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            value={this.state.password}
            onChange={this.handlePasswordChange}
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
}
