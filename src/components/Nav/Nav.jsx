import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const { loggedIn, setLoggedIn } = props;
  const handleClick = () => {
    window.localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <nav>
      <div id="logo-container">
        <Link to="/">
          <img src={`/assets/media/logo.png`} id="logo" alt="EducAid-logo" />
        </Link>
      </div>
      <ul className="navbar">
        {/* <li className="nav-link">
          <Link to="/">Home</Link>
        </li> */}
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/all-projects">Campaigns</Link>
        </li>
        <li className="nav-link">
          <Link to="/create-project">Start a Campaign</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>

        {loggedIn && (
          <li className="nav-link">
            <Link to="/user/session">My EducAid</Link>
          </li>
        )}

        {!loggedIn && (
          <li className="nav-link">
            <Link to="/register">Sign Up</Link>
          </li>
        )}
        {!loggedIn && (
          <li className="nav-link">
            <Link to="/login">Login</Link>
          </li>
        )}

        <div id="logout-wrapper">
          {loggedIn && (
            <li className="nav-link">
              <button id="logout-button" onClick={handleClick}>
                Log Out
              </button>
            </li>
          )}
        </div>
      </ul>

      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Nav;
