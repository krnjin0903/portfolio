import React from "react";
import "./skill.css";

const Skill = () => {
  const skills = {
    frontend: ["JavaScript", "HTML", "CSS", "React.js", "jQuery", "Bootstrap"],
    backend: [
      "C#",
      "ASP.NET",
      "Node.js",
      "Express.js",
      "SQL",
      "MongoDB",
      "RESTful API",
    ],
    devTools: [
      "Visual Studio code",
      "Visual Studio",
      "SSMS",
      "Postman",
      "Chrome Dev Tool",
      "Git",
      "NPM",
      "Yarn",
    ],
  };
  const mapSkill = (skill) => {
    return <p>{skill}</p>;
  };
  return (
    <React.Fragment>
      <section className="skill" id="skill">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Skills</h2>
              <p>
                These are the skills that I have used to create my mini apps and
                projects.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="row">
              <div className="col">
                <h3>Frontend</h3>
                {skills.frontend.map(mapSkill)}
              </div>
              <div className="col">
                <h3>Backend/Database</h3>
                {skills.backend.map(mapSkill)}
              </div>
              <div className="col">
                <h3>DevTools</h3>
                {skills.devTools.map(mapSkill)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skill;
