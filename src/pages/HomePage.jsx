import { useState, useEffect } from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

// CSS
// import "./HomePage.css";

function HomePage() {
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

  // Some changes here that were not in thinkific regarding projectData
  return (
    <div id="project-list">
      {projectList.map((project, key) => {
        return <ProjectCard key={key} projectData={project} />;
      })}
    </div>
  );
}

export default HomePage;
