import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useOutletContext,
} from "react-router-dom";

function CommentForm() {
  // const { project } = props

  const authToken = window.localStorage.getItem("token");
  const [loggedIn] = useOutletContext();
  const [comments, setComments] = useState({
    // from JSON Raw Body in Deployed (default values)
    // this is what is returned at the bottom
    title: "",
    content: "",
  });

  // enables redirect
  const navigate = useNavigate();

  // accesses project ID so the comment can be connected to it
  const { id } = useParams();

  // copies the original data, replaces the old data for each id/value pair to what is input in the form (changes state). this will be submitted to API below
  const handleChange = (event) => {
    const { id, value } = event.target;
    setComments((prevComments) => ({
      ...prevComments,
      [id]: value,
    }));
  };

  // submit the new data (state change) from handleChange.
  // POST has been moved from separate function to be embedded and actioned when the submit button is pressed.
  const handleSubmit = async (event) => {
    event.preventDefault();

    // if the auth token exists (if logged in)
    // TRY to POST the data to your deployed, using fetch.
    // send the token with it to authorize the ability to post
    // wait for the response -
    // if successful, return the JSON payload and reload the page with the data
    // if not successful, CATCH the error and display as a pop up alert
    // if not logged in, redirect to login page

    if (loggedIn) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}comments/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${authToken}`,
            },
            body: JSON.stringify({ project: id, ...comments }),
          }
        );
        if (!response.ok) {
          throw new Error(await response.text());
        }
        location.reload();
      } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
      }
    } else {
      // redirect to login page
      navigate(`/login`);
    }
  };

  return (
    <>
      {loggedIn ? (
        <div>
          {/* <h2> Comment on this Campaign</h2> */}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="content">Comment:</label>
              <input
                type="text"
                id="content"
                placeholder="Enter Comment"
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="Submit">Submit comment</button>
            </div>
          </form>
        </div>
      ) : (
        <Link to="/login" className="button-link">
          Login to comment
        </Link>
      )}
    </>
  );
}

export default CommentForm;
