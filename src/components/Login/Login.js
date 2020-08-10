import React from 'react';
import './Login.css';

import logo from '../../images/logo.svg';
import facebook from '../../images/facebook.svg';


const Login = () => {
  return (
    // Header
    <div className="hero container-fluid">
      <div className="logo px-3 py-2">
        <img id='logo' src={logo} alt="logo" />
      </div>


    {/* Sign in Card */}
      <div className="card mt-1">
        <div className="signIn p-3">
          <form >
            <h1>Sign In</h1>
            <div className="form-group">
              <input type="email" className="form-control" id="InputEmail" placeholder="Email or phone number"/>
            </div>
            <div className="form-group">
              <input type="password" class="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-danger btn-block mt-5">Sign In</button>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input bg-dark" />
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          </form>
            <div className="facebook">
            <img id='facebook' src={facebook} alt="facebook"/><span>
              Login with Facebook
            </span>
            <p>New to Netflix?<span><a href="#">Sign up now.</a></span></p>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span><a href="#">Learn more.</a></span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;