import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';
import Login from './Login';
import Signup from './Signup';
import { Navbar, Nav, Button, Collapse } from 'react-bootstrap';

const CustomNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const isUserLoggedIn = () => {
    return localStorage.getItem("invest_iq_access_token") !== null;
  };

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleSignup = () => {
    setShowSignup(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('invest_iq_access_token');
    window.location.reload();
  };

  return (
    <Navbar expand="lg" bg="transparent" variant="light" className="custom-navbar">
      <Navbar.Brand href="/">
        <img src="logo_2.png" alt="" height={50} width={150} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          {!isUserLoggedIn() && (
            <>
              <Nav.Link href="#" onClick={handleLogin}>Login</Nav.Link>
              <Nav.Link href="#" onClick={handleSignup}>Signup</Nav.Link>
            </>
          )}
          {isUserLoggedIn() && (
            <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
      <Login show={showLogin} setShow={setShowLogin} />
      <Signup show={showSignup} setShow={setShowSignup} />
    </Navbar>
  );
};

export default CustomNavbar;
