import React from "react";
import logo from "../../image/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-align">
            <div className="col-6">
              <img src={logo} alt="logo" />
            </div>
            <div className="col-6">
              <p>CopyRight 2023. All Right Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
