import { useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

function UserRegistrationForm() {
  const authToken = window.localStorage.getItem("token");
  const [users, setUsers] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    profile_picture: "",
    bio: "",
    country_of_residence: "",
    highest_level_of_education: "",
    username: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!authToken) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(users),
        });
        navigate(`/login`);
      } catch (err) {
        console.error(err);
      }
    } else {
      // redirect to login page
      navigate(`/`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <h2>
          Become part of the EducAid community to start your own campaign, or
          make pledges.
        </h2>
        <div>
          <label htmlFor="first_name">First name:</label>
          <input type="text" id="first-name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="last_name">Last name:</label>
          <input type="text" id="last-name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="profile_picture">profile_picture:</label>
          <input
            type="text"
            id="profile-picture"
            placeholder="Paste your image URL here"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <input
            type="text"
            id="bio"
            placeholder="Share some things about yourself"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country_of_residence">Country of Residence:</label>
          <input
            type="text"
            id="country-of-residence"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="highest_level_of_education">
            Highest level of education:
          </label>
          <input
            type="text"
            id="highest-level-of-education"
            placeholder="Please leave blank if you are not comfortable sharing this"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Your username must be as unique as you!"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="repeat_password">Repeat Password:</label>
          <input
            type="text"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Create your account</button>
        </div>
      </form>
    </div>
  );
}

export default UserRegistrationForm;

// Currently users other than admin are not able to sign in? Issue with returning token.
