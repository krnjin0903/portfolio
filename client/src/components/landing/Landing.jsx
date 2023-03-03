import React from "react";
import Banner from "./banner/Banner";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import Skill from "./skill/Skill";

const Landing = () => {
  return (
    <React.Fragment>
      <Banner />
      <Skill />
      <Project />
      <Contact />
    </React.Fragment>
  );
};

export default Landing;
