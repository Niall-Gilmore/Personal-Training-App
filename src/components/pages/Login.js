import React, { Component } from 'react'
import './Login.css';


const  express = require ('express');
const mysql = require ('mysql');
const app = express();


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'personal_training_app',
})

db.connect ((error) => {
  if(error) {
  console.log(error) 
  } else {
    console.log("MYSQL Connected...")
  }
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
})


export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Login In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )

   
  }
  
}