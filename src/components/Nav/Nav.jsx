import { Link } from "react-router-dom";
import './Nav.css';

function Nav(props) {
  const { loggedIn, setLoggedIn } = props
  const handleClick = () => {
      window.localStorage.removeItem("token")
      setLoggedIn(false)
  }

  return (
    <nav>
      <div className="nav-container">
        <div id="logo-container">
            <img src="EducAid-logo.png" id="logo" alt="EducAid-logo" />
        </div>

        
        <div className="nav-control">
          <Link to="/" className="button-links">
            Home
          </Link>
          <Link to="/about" className="button-links">
            About
          </Link>
          <Link to="/all-projects" className="button-links"> 
            Campaigns
          </Link>
          <Link to="/create-project" className="button-links">
            Start a Campaign
          </Link>

          {loggedIn && (
            <Link to="/user/session" className="button-links">
              My Account
            </Link>
            )}
          {!loggedIn && (
            <Link to="/register" className="button-links">
                Sign Up
            </Link>
            )}
          {!loggedIn && (
            <Link to="/login" className="button-links">
                Login
            </Link>
            )}
      </div>
        
      <div id="logout-wrapper">
        {loggedIn && (
          <button id="logout-button" onClick={handleClick}>
              Log Out
          </button>
          )}
      </div>
    </div>
    </nav>
  );
}

export default Nav;