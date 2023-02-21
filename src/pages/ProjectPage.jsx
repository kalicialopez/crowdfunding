import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { oneProject } from "../data";

function ProjectPage() {
    //State
    const [projectData, setProjectData] = useState({ pledges: [ ]});

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
            console.log(res);
            const data = await res.json();
            setProjectData(data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchProject();
      }, []);

  return (
    <div>
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              ${pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectPage;