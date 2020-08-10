import React from 'react';
import './Login.css';


import logo from '../../images/logo.svg';
import facebook from '../../images/facebook2.svg';
import globe from '../../images/globe.svg';


const Login = () => {
  return (
    // Header
    <div className="main hero">
      <div className="container-fluid">
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
            <button type="submit" className="btn btn-block mt-5">Sign In</button>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input bg-dark" />
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          </form>
            <div className="facebook">
            <img id='facebook' src={facebook} alt="facebook"/> <span>
              Login with Facebook
            </span>
            <p>New to Netflix?<span><a href="#">Sign up now.</a></span></p>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span><a href="#">Learn more.</a></span></p>
          </div>
        </div>
      </div>
    </div>

        {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p className="footer-contact">Questions? <span>Contact us.</span></p>
          <ul className="footer-list mt-4">
            <li>Gift Card Terms</li>
            <li>Terms of Use</li>
            <li>Privacy Statement</li>
          </ul>
          <div className="btn-group mt-3">
            <button className="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
              <span><img id='globe' src={globe} alt="globe" /></span>  English
            </button>
            <div className="dropdown-menu">
              English
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;