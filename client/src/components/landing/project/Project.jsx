import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { miniApps, projects } from "./listOfProjects";
import "./project.css";

const Project = () => {
  const [tab, setTab] = useState("miniApp");

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
              <p></p>

              <ul className="nav nav-pills">
                <li className="nav-item">
                  <button
                    className={`nav-link firstButton ${
                      tab === "miniApp" ? "active" : ""
                    }`}
                    name="miniApp"
                    onClick={onClickButton}
                  >
                    Mini Apps
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link lastButton ${
                      tab === "projects" ? "active" : ""
                    }`}
                    name="projects"
                    onClick={onClickButton}
                  >
                    Projects
                  </button>
                </li>
              </ul>
              <div className="row">
                {tab === "miniApp"
                  ? miniApps.map(mapProjectCard)
                  : projects.map(mapProjectCard)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Project;
