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
        <div id="nav-container">
        <div className="logo-container">
            <img src="EducAid-logo.png" id="logo" alt="EducAid-logo" />
        </div>

        
        <div className="nav-control">
          <Link to="/" className="button-links">
          Home
          </Link>
            {!loggedIn && <Link to="/login" className="button-links">Login</Link>}
            {loggedIn && (
  <button className="button-links" id="logout-button" onClick={handleClick}>Log Out
  </button>
  )}
          <Link to="/about" className="button-links">
          About
          </Link>
          <Link to="/all-projects" className="button-links"> Campaigns
          </Link>
          <Link to="/create-project" className="button-links">
          Start a Campaign
          </Link>
        </div>
        </div>
      </nav>
);
}



export default Nav;