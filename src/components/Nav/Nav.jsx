import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
  const { loggedIn, setLoggedIn } = props;
  const handleClick = () => {
    window.localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <nav>
      {/* <div className="nav-wrapper"> */}
      <div id="logo-container">
        <img src={`/assets/media/logo.png`} id="logo" alt="EducAid-logo" />
      </div>

      <div className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/all-projects" className="nav-link">
          Campaigns
        </Link>
        <Link to="/create-project" className="nav-link">
          Start a Campaign
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>

        {loggedIn && (
          <Link to="/user/session" className="nav-link">
            My Account
          </Link>
        )}
        {!loggedIn && (
          <Link to="/register" className="nav-link">
            Sign Up
          </Link>
        )}
        {!loggedIn && (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
        <span id="logout-wrapper">
          {loggedIn && (
            <button
              id="logout-button"
              className="nav-link"
              onClick={handleClick}
            >
              Log Out
            </button>
          )}
        </span>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Nav;
