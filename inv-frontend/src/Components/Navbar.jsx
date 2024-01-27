// Navbar.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';
import Login from './Login';
import Signup from './Signup';

const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const isUserLoggedIn = () => {
    return localStorage.getItem("invest_iq_access_token") != null
  }
  const handleLogin = () => {
    console.log('Login');
    setShowLogin(true);
  };
  const handleSignup = () => {
    console.log('Signup');
    setShowSignup(true);
  }
  const handleLogout = () => {
    localStorage.removeItem('invest_iq_access_token')
    window.location.reload()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="logo_2.png" alt="" height={50} width={150} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            {!isUserLoggedIn() && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleLogin}>
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleSignup}>
                    Signup
                  </a>
                </li>
              </>
            )}
            {
              isUserLoggedIn() && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
      <Login show={showLogin} setShow={setShowLogin} />
      <Signup show={showSignup} setShow={setShowSignup} />
    </nav>

  );
};

export default Navbar;
