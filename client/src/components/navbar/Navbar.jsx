import React, { useState, useEffect } from "react";
import logo from "../../image/logo.png";
import "./navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <nav className={`navbar navbar-expand-lg  ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <HashLink className="navbar-brand" smooth to="/#home">
          <img src={logo} alt="Logo" />
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <HashLink
                smooth
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                aria-current="page"
                to="/#home"
                onClick={() => updateActiveLink("home")}
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                className={`nav-link ${
                  activeLink === "skills" ? "active" : ""
                }`}
                to="/#skill"
                onClick={() => updateActiveLink("skills")}
              >
                Skills
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                className={`nav-link ${
                  activeLink === "projects" ? "active" : ""
                }`}
                to="/#project"
                onClick={() => updateActiveLink("projects")}
              >
                Projects
              </HashLink>
            </li>
          </ul>
          <span className="navbar-text">
            <div className="test"></div>
            <HashLink smooth to="/#contact">
              <button>
                <span>Let's Connect</span>
              </button>
            </HashLink>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
