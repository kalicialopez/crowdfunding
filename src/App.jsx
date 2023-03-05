import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useState } from "react";


// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import ProjectPage from "./pages/ProjectPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import AboutPage from "./pages/AboutPage";
import SessionUserPage from "./pages/SessionUserPage";


// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

// CSS
import "./App.css";


const HeaderLayout = () => {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") != null)
  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </>
  );
}

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
      { path: "/create-project", element: < CreateProjectPage /> },
      { path: "/user/session", element: <SessionUserPage /> },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;





