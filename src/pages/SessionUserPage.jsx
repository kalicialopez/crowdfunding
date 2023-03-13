import { useState, useEffect } from "react";

// components
import UserCard from "../components/UserCard/UserCard";

function SessionUserPage() {
  const authToken = window.localStorage.getItem("token");

  // State
  const [user, setUser] = useState({});

  // Effects
  // ---- ASYNC change
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}users/session`,
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${authToken}`,
            },
          }
        );
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [authToken]);

  return (
    <body className="page-body">
      <div>
        <h1>Welcome back</h1>
        <UserCard user={user} />
      </div>
    </body>
  );
}
export default SessionUserPage;
