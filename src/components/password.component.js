import React, { Component } from "react";
export default class Password extends Component {
    render() {
        return (
            <form>
        <h3> Reset Your Password</h3>
        <div className="mb-3">
          <label> Old Password </label>
          <input
            type="password"
            className="form-control"
            placeholder="Old Password"
            required
          />
        </div>
        <div className="mb-3">
          <label>New Password</label>
          <input type="password" className="form-control" placeholder="New Password" required/>
        </div>
        <div className="mb-3">
          <label>Confirm New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn">
            Reset Password
          </button>
        </div>
      </form>
            )
        }
    }