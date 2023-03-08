import { Link } from "react-router-dom";

// Components
import ProgressBar from "../ProgressBar/ProgressBar";

// CSS
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="project-card">
      <Link className="project-name-link" to={`/project/${projectData.id}`}>
        <img src={projectData.image} />
        <h3>{projectData.title}</h3>
        <ProgressBar goal={projectData.goal} total={projectData.total} />
        <p>
          created: {new Date(projectData.date_created).toLocaleDateString()}
        </p>
      </Link>
    </div>
  );
}

export default ProjectCard;
