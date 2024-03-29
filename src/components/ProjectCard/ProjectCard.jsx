import { Link } from "react-router-dom";

// Components
import ProgressBar from "../ProgressBar/ProgressBar";

// CSS
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}>
        <div className="project-image">
          <img src={projectData.image} />
        </div>
        <div className="project-text">
          <h3 className="project-card-name-link">{projectData.title}</h3>
          <ProgressBar
            goal={projectData.goal}
            sum_pledges={projectData.sum_pledges}
          />
          <p className="project-card-dates">
            Created: {new Date(projectData.date_created).toLocaleDateString()}
            <br />
            ⏳ <br />
            Deadline:
            {new Date(projectData.campaign_deadline).toLocaleDateString()}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
