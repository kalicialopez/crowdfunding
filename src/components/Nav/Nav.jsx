import { Link } from "react-router-dom";
// import './Nav.css';

function Nav(props) {
  const { loggedIn, setLoggedIn } = props
  const handleClick = () => {
      window.localStorage.removeItem("token")
      setLoggedIn(false)
  }
  return (
    <nav>
        <div id="logo">
            <img src="src/images/educaid-logo.png" alt="EducAid-logo" />
        </div>
        <div id="nav-controls">
          <Link to="/" >Home</Link>
            {!loggedIn && <Link to="/login" className="btn">Login</Link>}
            {loggedIn && (
                  <button className="logout-btn" onClick={handleClick}>Log Out
                  </button>
                  )}
        </div>
    </nav>
);
}
export default Nav;