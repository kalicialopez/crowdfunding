import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function AllProjectsPage() {
  //State
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
        console.log(data);
      });
  }, []);

  return (
    <body className="page-body">
      <h1>Browse all Campaigns</h1>
      <div id="project-list">
        {projectList.map((project, key) => {
          return <ProjectCard key={key} projectData={project} />;
        })}
      </div>
    </body>
  );
}

export default AllProjectsPage;
