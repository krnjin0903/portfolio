import React from "react";
import "./mivet.css";

const Mivet = () => {
  return (
    <React.Fragment>
      <div className="mivet">
        <h2>Mivet</h2>
        <div className="container">
          <div className="row">
            <p className="description">
              Mivet is a web app startup whose mission is to streamline equine
              veterinary care through technology
            </p>
            <a
              href="https://mivet.azurewebsites.net/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Go to Mivet MVP website
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mivet;
