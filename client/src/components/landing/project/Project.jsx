import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { frontEndProjects, fullStackProjects } from "./listOfProjects";
import "./project.css";

const Project = () => {
  const [tab, setTab] = useState("frontEnd");

  const mapProjectCard = (project) => {
    return <ProjectCard {...project} />;
  };

  const onClickButton = (e) => {
    setTab(e.target.name);
  };
  return (
    <React.Fragment>
      <section className="project" id="project">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Projects</h2>
              <p>
                Lorefdjsjlf fkjdalsfjkd j lsdjk jfk dfsjlfjka fjlkfj kasdjlfj
                fkljf
              </p>

              <ul className="nav nav-pills">
                <li className="nav-item">
                  <button
                    className={`nav-link firstButton ${
                      tab === "frontEnd" ? "active" : ""
                    }`}
                    name="frontEnd"
                    onClick={onClickButton}
                  >
                    Front-End
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link lastButton ${
                      tab === "fullStack" ? "active" : ""
                    }`}
                    name="fullStack"
                    onClick={onClickButton}
                  >
                    Full Stack
                  </button>
                </li>
              </ul>
              <div className="row">
                {tab === "frontEnd"
                  ? frontEndProjects.map(mapProjectCard)
                  : fullStackProjects.map(mapProjectCard)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Project;
