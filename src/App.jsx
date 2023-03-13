import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { Link, useState } from "react";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import ProjectPage from "./pages/ProjectPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import AboutPage from "./pages/AboutPage";
import SessionUserPage from "./pages/SessionUserPage";
import ContactPage from "./pages/ContactPage";

// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

// CSS
import "./App.css";

const HeaderLayout = () => {
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("token") != null
  );
  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <div id="hero-image-container">
        <img
          src={`/assets/media/banner.png`}
          id="hero-image"
          alt="EducAid-banner"
        />
      </div>
      <div className="hero-text">
        <p className="hero-subtext">It's never too late for change</p>
        <h1 id="hero-text">
          {" "}
          <div>START CARVING YOUR </div> NEW PATH TODAY
        </h1>
        {/* <button>Create a campaign</button> */}
        <p>Help others carve their paths</p>
        {/* <button>Donate now</button> */}
        {/* <Link to="/login" className="button-links">
          Login to Pledge
        </Link> */}
      </div>
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/register", element: <UserRegistrationPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/all-projects", element: <AllProjectsPage /> },
      { path: "/create-project", element: <CreateProjectPage /> },
      { path: "/user/session", element: <SessionUserPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
