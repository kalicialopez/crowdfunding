import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

// CSS
// import "./HomePage.css";

function HomePage() {
  //State
  const [projectList, setProjectList] = useState([]);
  const [shuffledSortedProjectList, setShuffledSortedProjectList] = useState(
    []
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
        // console.log(data);
      });
  }, []);

  // Shuffle function
  const shuffleProjectList = () => {
    const shuffledList = [...projectList]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setShuffledSortedProjectList(shuffledList);
  };

  // shuffle on first render
  useEffect(() => {
    shuffleProjectList();
  }, [projectList]);

  return (
    <>
      <body className="page-body">
        <h1>Welcome to EducAid,</h1>
        <h2>
          The non-for-profit crowdfunding platform that empowers individuals to
          pursue their dreams of education without financial barriers.
        </h2>
        <div className="page-image-container">
          <img
            src={`/assets/media/financial-aid.jpg`}
            className="page-image"
            alt="financial-aid"
          />
        </div>
        <p className="page-text">
          Education is powerful, and when accessed by those with the right
          attitude and perseverance, has the capacity to change lives. Whether
          you are a stay-at-home mother, 20 years into your existing career,
          have never had a 'career' per se, or you're seeking change, yet find
          yourself hindered by financial constraints, EducAid is here to help.{" "}
          <br />
          <br />
          Similarly, if you understand the impact education can have on the life
          trajectory of an individual, and are in the fortunate position to be
          able to help someone achieve their career aspirations, EducAid can
          assist with this too.
        </p>

        <h2>Featured Active Campaigns </h2>

        <button onClick={shuffleProjectList} className="button">
          Shuffle
        </button>

        <div id="project-list">
          {shuffledSortedProjectList.map((project, key) => {
            return <ProjectCard key={key} projectData={project} />;
          })}
        </div>

        {/* <div id="project-list">
          {projectList.map((project, key) => {
            return <ProjectCard key={key} projectData={project} />;
          })}
        </div> */}
      </body>
    </>
  );
}

export default HomePage;
