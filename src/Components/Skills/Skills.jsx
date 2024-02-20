import React from "react";
import reactIcon from "../../assets/react_icon.png";
import javascriptIcon from "../../assets/javascrip.png";
import tailwindIcon from "../../assets/tailwind.png";
import bootstrapIcon from "../../assets/bootstrap.png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import githubIcon from "../../assets/github.png";

import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="content">
        <h2 className="workstitle">About Me</h2>
        <div className="about-content">
          <p>
            As a Fresh and Passionate Frontend Developer. I bring a strong
            Foundation in
            <br />
            <span
              style={{ color: "yellow", fontWeight: "700", marginLeft: "2px" }}
            >
              React.js, Tailwind CSS , Bootstarp , Html, CSS, JavaScript,
              Git&Github{" "}
            </span>{" "}
            <br /> Eager to contribute to innovative web projects and
            continually expand my skills set to <br />
            create Dynamic and User-friendly Website
          </p>
        </div>
      </div>

      <div className="images">
        <img src={reactIcon} alt="React" className="image" />
        <img src={javascriptIcon} alt="JavaScript" className="image" />
        <img src={tailwindIcon} alt="Tailwind" className="image" />
        <img src={bootstrapIcon} alt="Bootstrap" className="image" />
        <img src={htmlIcon} alt="HTML" className="image" />
        <img src={cssIcon} alt="CSS" className="image" />
        <img src={githubIcon} alt="GitHub" className="image" />
      </div>
    </section>
  );
};

export default Skills;
