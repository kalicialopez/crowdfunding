// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// // Data from class activity
// // import { oneProject } from "../data";

// // Components
// import PledgeForm from "../components/PledgeForm/PledgeForm";
// import CommentForm from "../components/CommentForm/CommentForm";
// import ProgressBar from "../components/ProgressBar/ProgressBar";

// function ProjectPage() {
//   //State
//   const [projectData, setProjectData] = useState({ pledges: [] });
//   const [commentData, setCommentData] = useState({ comments: [] });
//   const [ownerData, setOwnerData] = useState({ owner: [] });

//   //Hooks
//   const { id } = useParams();

//   // Check user is LoggedIn
//   const token = window.localStorage.getItem("token");

//   //Effects
//   // useEffect(() => {
//   //     fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
//   //     .then((results) => {
//   //         return results.json();
//   //     })
//   //     .then((data) => {
//   //         setProjectData(data);
//   //     });
//   // }, []);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const res = await fetch(
//           `${import.meta.env.VITE_API_URL}projects/${id}`
//         );
//         const data = await res.json();

//         const ownerRes = await fetch(
//           `${import.meta.env.VITE_API_URL}users/${data.owner}`
//         );
//         const ownerData = await ownerRes.json();

//         const commentRes = await fetch(
//           `${import.meta.env.VITE_API_URL}comments/${id}`
//         );
//         const commentData = await commentRes.json();

//         console.log(data);

//         setProjectData(data);
//         setOwnerData(ownerData);
//         setCommentData(commentData);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProject();
//   }, []);

//   const date = new Date(projectData.date_created);
//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };

//   return (
//     <body className="page-body">
//       <div className="project-information">
//         <h2>{projectData.title}</h2>
//         <img src={projectData.image} />
//         <h3>Created on: {date.toLocaleDateString(undefined, options)}</h3>

//         <h3>By: {ownerData.username}</h3>
//         <p>{projectData.description}</p>
//         <div id="profile-picture">
//           {ownerData.profile_picture && (
//             <img src={ownerData.profile_picture} alt="profile picture" />
//           )}
//         </div>
//         <br />

//         <h3>
//           Status:{" "}
//           {`Status: ${projectData.is_open}` ? (
//             <span>Active</span>
//           ) : (
//             <span>Inactive</span>
//           )}
//         </h3>
//         <h3>
//           Deadline:{" "}
//           {new Date(projectData.campaign_deadline).toLocaleDateString(
//             undefined,
//             options
//           )}
//         </h3>

//         {/* Pledges */}
//         <h3>Pledges</h3>
//         <ul>
//           {projectData.pledges.map((pledgeData, key) => {
//             return (
//               <li key={key}>
//                 ${pledgeData.pledge_amount} from{" "}
//                 {pledgeData.supporter ? pledgeData.supporter : "Anonymous"}
//               </li>
//             );
//           })}
//         </ul>
//         <PledgeForm projectId={projectData.id} />

//         {/* Comments */}
//         <h3>Comments</h3>
//         <ul>
//           {commentData.comments &&
//             commentData.comments.map((commentData, key) => {
//               return (
//                 <li key={key}>
//                   {commentData.commentator} {commentData.content}
//                 </li>
//               );
//             })}
//         </ul>
//         <CommentForm commentId={commentData.id} />
//       </div>
//     </body>
//   );
// }

// export default ProjectPage;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import PledgeForm from "../components/PledgeForm/PledgeForm";
import CommentForm from "../components/CommentForm/CommentForm";
import ProgressBar from "../components/ProgressBar/ProgressBar";

function ProjectPage() {
  // State
  const [projectData, setProjectData] = useState({ pledges: [] });
  const [commentData, setCommentData] = useState({ comments: [] });
  const [ownerData, setOwnerData] = useState({ owner: [] });

  // Hooks
  const { id } = useParams();

  // Logged in check
  const token = window.localStorage.getItem("token");

  // Effects
  // THIS WORKS BUT I CANNOT REPLICATE TO FETCH OWNER DATA FOR OWNER PROFILE SO MUST USE ALL THE OLD CODE
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
  //     .then((results) => {
  //       return results.json();
  //     })
  //     .then((data) => {
  //       setProjectData(data);
  //       setCommentData(data);
  //     });
  // }, []);

  // // MY ATTEMPT AT FETCHING OWNER DATA - NOT WORKING
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}users/${data.owner}`)
  //     .then((results) => {
  //       return results.json();
  //     })
  //     .then((data) => {
  //       setOwnerData(data);
  //     });
  // }, []);

  // Old code snippet using async
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

  return (
    <>
      <body className="page-body">
        <h1>{projectData.title}</h1>
        <div id="project-page">
          {/* PROJECT */}
          <div className="project-page-project-and-owner-profile-container">
            <div className="project-page-project-container">
              <div className="project-page-project-text">
                <p>
                  <strong>Created:</strong>{" "}
                  {new Date(projectData.date_created).toDateString()}
                </p>
                <p>
                  <strong>Status:</strong>
                  {projectData.is_open ? (
                    <span> Active</span>
                  ) : (
                    <span>Closed</span>
                  )}
                </p>
                <div className="progressbar-container">
                  <ProgressBar
                    goal={projectData.goal}
                    sum_pledges={projectData.sum_pledges}
                  />
                </div>

                <p>{projectData.description}</p>
                <p className="realistic-marker-highlight">
                  <strong>⏳ Deadline:</strong>{" "}
                  {new Date(projectData.campaign_deadline).toDateString()}
                </p>
              </div>
              <div className="project-page-project-image-container">
                <img
                  className="project-page-project-image"
                  src={projectData.image}
                />
              </div>
            </div>

            {/* OWNER PROFILE  */}
            <h2 className="project-page-owner-profile-heading">
              Meet {ownerData.username}
            </h2>
            <div className="project-page-owner-profile-container">
              <div className="project-page-owner-profile-image-container">
                <img
                  className="project-page-owner-profile-image"
                  src={ownerData.profile_picture}
                />
                <div className="project-page-owner-profile-text">
                  <p>
                    <center>
                      <div class="bio-box bio-sb">
                        <i>"{ownerData.bio}"</i>
                      </div>
                    </center>
                  </p>
                  <br></br>
                  <p>
                    {ownerData.username} lives in{" "}
                    {ownerData.country_of_residence}
                  </p>
                  <p>
                    <strong>Current occupation/industry:</strong>{" "}
                    {projectData.current_occupation_or_industry}
                  </p>
                  <p>
                    <strong>Desired occupation/industry:</strong>{" "}
                    {projectData.desired_occupation_or_industry}
                  </p>
                </div>
              </div>
            </div>

            {/* PLEDGES - CAN'T MAKE PLEDGES RIGHT NOW WITH THIS CODE*/}
            <h2>Pledge to this Campaign</h2>
            <div className="project-page-pledge-container">
              <ul className="pledge-list">
                {projectData.pledges &&
                  projectData.pledges.map((pledgeData, key) => {
                    return (
                      <li key={key}>
                        <p className="pledge-box pledge-sb">
                          <strong>${pledgeData.amount}</strong> from{" "}
                          {pledgeData.supporter
                            ? pledgeData.supporter
                            : "Anonymous"}{" "}
                          who said
                          <i>"{pledgeData.comment}"</i>
                        </p>
                      </li>
                    );
                  })}
              </ul>
              <PledgeForm projectId={projectData.id} />
            </div>
          </div>

          {/* COMMENTS - COMMENTS ARE NOT RENDERING?*/}
          <h2>Comment on this Campaign</h2>
          <div className="project-page-comments-container">
            <ul className="comment-list">
              {commentData.comments &&
                commentData.comments.map((commentData, key) => {
                  return (
                    <li key={key}>
                      <p classname="comment-box comment-sb">
                        {commentData.commentator} says ... {commentData.title}
                      </p>
                    </li>
                  );
                })}
            </ul>
            <CommentForm commentId={commentData.id} />
          </div>
        </div>
      </body>
    </>
  );
}

export default ProjectPage;

// do not put Data on the end of objects i.e projectData, commentData?

// Issues
// Currently no comments are able to be posted.
// Comment title field in comment model was removed in backend but still exists in front-end. Unsure if this is the reason it is not working?

// Pledges are not working anymore. Field in back end was changed from 'pledge_amount' to 'amount'. Stopped working after this change was deployed.
