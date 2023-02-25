import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useState } from "react";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";

// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

// CSS
import "./App.css";
// import { UseState } from "react";

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
      { path: "/login", element: <LoginPage /> },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
