import { Link } from "react-router-dom";

// Styles
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
    </nav>
  );
}

export default Nav;

// Attempt 2 at hamburger-navbar.
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // Styles
// import "./Nav.css";

// // Icons
// import { MdClose } from "react-icons/md";
// import { FiMenu } from "react-icons/fi";

// function Nav(props) {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   const { loggedIn, setLoggedIn } = props;
// }

// const handleClick = () => {
//   window.localStorage.removeItem("token");
//   setLoggedIn(false);
// };

// const handleToggle = () => {
//   setNavbarOpen(!navbarOpen);
// };

// const closeMenu = () => {
//   setNavbarOpen(false);
// };

// return (
//   <>
//     <nav>
//       <div id="logo-container">
//         <Link to="/">
//           <img src={`/assets/media/logo.png`} id="logo" alt="EducAid-logo" />
//         </Link>
//       </div>

//       <button onClick={handleToggle}>
//         {navbarOpen ? (
//           <MdClose style={{ color: "black", width: "30px", height: "30px" }} />
//         ) : (
//           <FiMenu style={{ color: "black", width: "30px", height: "30px" }} />
//         )}
//       </button>

//       <ul className={`navbar ${navbarOpen ? " showMenu" : ""}`}>
//         <li className="nav-link" onClick={() => closeMenu()}>
//           <Link to="/">Home</Link>
//         </li>
//         <li className="nav-link" onClick={() => closeMenu()}>
//           <Link to="/about">About</Link>
//         </li>
//         <li className="nav-link" onClick={() => closeMenu()}>
//           <Link to="/all-projects">Campaigns</Link>
//         </li>
//         <li className="nav-link" onClick={() => closeMenu()}>
//           <Link to="/create-project">Start a Campaign</Link>
//         </li>
//         <li className="nav-link" onClick={() => closeMenu()}>
//           <Link to="/contact">Contact</Link>
//         </li>

//         {loggedIn && (
//           <li className="nav-link" onClick={() => closeMenu()}>
//             <Link to="/user/session">My EducAid</Link>
//           </li>
//         )}

//         {!loggedIn && (
//           <li className="nav-link" onClick={() => closeMenu()}>
//             <Link to="/register">Sign Up</Link>
//           </li>
//         )}
//         {!loggedIn && (
//           <li className="nav-link" onClick={() => closeMenu()}>
//             <Link to="/login">Login</Link>
//           </li>
//         )}

//         <div id="logout-wrapper">
//           {loggedIn && (
//             <li className="nav-link" onClick={() => closeMenu()}>
//               <button id="logout-button" onClick={handleClick}>
//                 Log Out
//               </button>
//             </li>
//           )}
//         </div>
//       </ul>
//     </nav>
//   </>
// );
// // }

// export default Nav;
