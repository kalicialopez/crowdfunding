import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

function ProjectForm(props) {
    const { project } = props
    const authToken = window.localStorage.getItem("token")
    const [loggedIn] = useOutletContext();
    const [projects, setProjects] = useState({
        // from JSON Raw Body in Deployed (default values)
        // this is what is returned at the bottom
        "title": "",
	    "description": "",
	    "goal": "",
	    "image": "",
	    "educational_institution": "",
	    "current_occupation_or_industry": "",
	    "desired_occupation_or_industry": "",
	    "is_open": "",
	    "date_created": "",
        "campaign_deadline": "",      
    });


    // enables redirect
    const navigate = useNavigate();

    // accesses project ID so the pledge can be connected to it
    const { id } = useParams();

    // copies the original data, replaces the old data for each id/value pair to what is input in the form (changes state). this will be submitted to API below
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjects((prevProjects) => ({
        ...prevProjects,
        [id]: value,
        }));
    };

    // submit the new data (state change) from handleChange.
        // POST has been moved from separate function to be embedded and actioned when the submit button is pressed. 
    const handleSubmit = async (event) => {
        event.preventDefault();

        // if the auth token exists (if logged in) 
            // TRY to POST the data to your deployed, using fetch.
            // send the token with it to authorise the ability to post
                // wait for the response - 
                // if successful, return the JSON payload and reload the page with the data
                // if not successful, CATCH the error and display as a pop up alert
        // if not logged in, redirect to login page

        if (loggedIn) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}projects/`,
                    {
                    method: "post",
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${authToken}`,
                },
                body: JSON.stringify(projects),
                }
                );
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                navigate(-1);
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
        {loggedIn?
            <div>
            <form onSubmit={handleSubmit}>
            <h2>Create a Crowdfunding Campaign</h2>
                <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Give your campaign a title"
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="description">Campaign description:</label>
                <input
                    type="text"
                    id="description"
                    placeholder="The more descriptive, the better. Share your inspiration, what you hope to achieve and how this can change your current situation"
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="goal">Goal amount:</label>
                <input 
                    type="number"
                    id="goal"
                    placeholder="State the amount you are aiming to raise" 
                    onChange={handleChange} 
                />
                </div>
                <div>
                <label htmlFor="image">Image URL:</label>
                <input 
                    type="text"
                    id="image"
                    placeholder="Pick a strong, relevant image to represent your campaign" 
                    onChange={handleChange} 
                />
                </div>
                <div>
                <label htmlFor="is_open">Campaign Status:</label>
                <input 
                    type="checkbox"
                    id="is_open" 
                    onChange={handleChange} 
                />
                </div>
                {/* <div>
                <label htmlFor="date_created">Date created:</label>
                <input 
                    type="datetime-local" 
                    id="date_created" 
                    onChange={handleChange} 
                />
                </div> */}
                <div>
                <label htmlFor="campaign_deadline">Campaign deadline:</label>
                <input 
                    type="datetime-local" 
                    id="campaign_deadline" 
                    onChange={handleChange} 
                />
                </div>
                <button type="submit">Create your Campaign!</button>
            </form>
            </div> 
        : (<p>Login to create a crowdfunding campaign</p>) }
        </>
    );
}

export default ProjectForm;