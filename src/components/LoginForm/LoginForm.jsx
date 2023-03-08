import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function LoginForm() {
  const [setLoggedIn] = useOutletContext();

  // State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Hooks
  const navigate = useNavigate();

  //Actions
  // handle change is plugged into input, every time the event handler for this input is triggered, it calls this function. Every time this function is called, it is passed into this function
  const handleChange = (event) => {
    //get the target of the event
    const { id, value } = event.target;

    setCredentials((prevCredentials) => ({
      // 3 dots is take the value of the object and put it into the new object
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  // const handleSubmit = async (event) => {
  // 	event.preventDefault();
  // 	if (credentials.username && credentials.password) {
  //         // calling the post data function that we wrote, and will return json
  //         const { token } = await postData();
  //         window.localStorage.setItem("token", token);
  //           setLoggedIn(true);
  //         navigate("./");
  //         // check if value of token doesn't = undefined. If it doesn't, store the token and change the state to setLoggedIn = true. Otherwise, don't store the token and setLoggedIn = false.
  //       } else {
  //         setLoggedIn(false);
  //       }
  //     }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      const { token } = await postData();
      if (token !== undefined) {
        window.localStorage.setItem("token", token);
        setLoggedIn(true);
        navigate("/");
      } else setLoggedIn(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          placeholder="Enter username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
