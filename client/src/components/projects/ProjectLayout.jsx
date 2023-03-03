import React from "react";
import { Outlet } from "react-router-dom";
import "./projectLayout.css";

const ProjectLayout = () => {
  return (
    <React.Fragment>
      <section className="projectLayout">
        <div className="row header">
          <h2>Project</h2>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProjectLayout;
