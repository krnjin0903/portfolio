import React, { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../../image/header-img.png";
import "./banner.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const listOfTitle = ["Web Developer", "Full Stack Engineer"];
  const [currentText, setCurrentText] = useState("");
  const interval = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, interval);

    return () => {
      clearInterval(ticker);
    };
  }, [currentText]);

  const tick = () => {
    let i = loopNum % listOfTitle.length;
    let fullText = listOfTitle[i];
    let updatedText = isDeleting
      ? fullText.substring(0, currentText.length - 1)
      : fullText.substring(0, currentText.length + 1);

    setCurrentText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <React.Fragment>
      <section className="banner" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 text-area">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm David `}</h1>
              <span className="txt-rotate">
                <span className="wrap">{currentText}</span>
              </span>
              <p>Welcome to my portfolio!</p>{" "}
              <p>
                For most of my web application, I will be using React.js for
                frontend. For backend, I will be using node.js or ASP.NET.
              </p>
              <button onClick={() => (window.location.href = "/#contact")}>
                Let's connect <ArrowRightCircle size={25} />
              </button>
            </div>
            <div className="col-6">
              <img src={headerImg} alt="Headder" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
