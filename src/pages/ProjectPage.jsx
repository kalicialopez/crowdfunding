import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Data from class activity
// import { oneProject } from "../data";

// Components
import PledgeForm from "../components/PledgeForm/PledgeForm";
import CommentForm from "../components/CommentForm/CommentForm";

function ProjectPage() {
  //State
  const [projectData, setProjectData] = useState({ pledges: [] });
  const [commentData, setCommentData] = useState({ comments: [] });
  const [ownerData, setOwnerData] = useState({ owner: [] });

  //Hooks
  const { id } = useParams();

  //Effects
  // useEffect(() => {
  //     fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
  //     .then((results) => {
  //         return results.json();
  //     })
  //     .then((data) => {
  //         setProjectData(data);
  //     });
  // }, []);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}projects/${id}`
        );
        const data = await res.json();

        const ownerRes = await fetch(
          `${import.meta.env.VITE_API_URL}users/${data.owner}`
        );
        const ownerData = await ownerRes.json();

        const commentRes = await fetch(
          `${import.meta.env.VITE_API_URL}comments/${id}`
        );
        const commentData = await commentRes.json();

        console.log(data);

        setProjectData(data);
        setOwnerData(ownerData);
        setCommentData(commentData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProject();
  }, []);

  const date = new Date(projectData.date_created);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <body className="page-body">
      <div className="project-information">
        <h2>{projectData.title}</h2>
        <img src={projectData.image} />
        <h3>Created on: {date.toLocaleDateString(undefined, options)}</h3>

        <h3>By: {ownerData.username}</h3>
        <p>{projectData.description}</p>
        <div id="profile-picture">
          {ownerData.profile_picture && (
            <img src={ownerData.profile_picture} alt="profile picture" />
          )}
        </div>
        <br />

        <h3>
          Status:{" "}
          {`Status: ${projectData.is_open}` ? (
            <span>Active</span>
          ) : (
            <span>Inactive</span>
          )}
        </h3>
        <h3>
          Deadline:{" "}
          {new Date(projectData.campaign_deadline).toLocaleDateString(
            undefined,
            options
          )}
        </h3>

        {/* Pledges */}
        <h3>Pledges</h3>
        <ul>
          {projectData.pledges.map((pledgeData, key) => {
            return (
              <li key={key}>
                ${pledgeData.pledge_amount} from{" "}
                {pledgeData.supporter ? pledgeData.supporter : "Anonymous"}
              </li>
            );
          })}
        </ul>
        <PledgeForm projectId={projectData.id} />

        {/* Comments */}
        <h3>Comments</h3>
        {/* <ul>
          {commentData.map((commentData, key) => {
            return (
              <li key={ key }>
                ${commentData.content} {commentData.project}
              </li>
            );
        })}
        </ul> */}
        <CommentForm commentId={commentData.id} />
      </div>
    </body>
  );
}

export default ProjectPage;

// do not put Data on the end of objects i.e projectData, commentData, it gets very confusing. Consider rectifying this later.
// Issues
// Currently no comments are able to be posted.
