import React from "react";
import "./Intro.css";
import image from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Noorul</span>
          <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I am Skilled Web Developer with Experience in creating and User
          Friendly Website
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} className="btnImg" alt="" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={image} alt="" className="bg" />
    </section>
  );
};

export default Intro;
