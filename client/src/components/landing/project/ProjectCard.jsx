import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <React.Fragment>
      <div className="col-4">
        <div className="projectImg">
          <img src={imgUrl} alt="project" />
          <div className="projectTxt">
            <Link className="projectLink" to={`/project/${link}`}>
              {title}
            </Link>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
