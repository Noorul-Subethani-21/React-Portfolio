import React, { useRef } from "react";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.png";
import portfolio7 from "../../assets/portfolio7.png";
import portfolio8 from "../../assets/portfolio8.png";
import portfolio9 from "../../assets/portfolio9.png";
import "./Projects.css";

const Projects = () => {
  const seemoreRef = useRef(null);

  const show = () => {
    if (seemoreRef.current) {
      seemoreRef.current.style.display = "block";
    }
  };

  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="workdesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence
      </span>
      <div className="workimgs">
        <a
          href="https://65cced64957577287b972a67--serene-crumble-d4f5c6.netlify.app/"
          className="workimg"
        >
          <img src={portfolio1} alt="" className="workimg" />
        </a>
        <a
          href="https://651e1b0039f6322157d80d3e--fancy-semifreddo-798f74.netlify.app/"
          className="workimg"
        >
          {" "}
          <img src={portfolio2} alt="" className="workimg" />
        </a>
        <a
          href="https://65c4c8c920da2806c1525b19--resonant-zabaione-dad34c.netlify.app/"
          className="workimg"
        >
          <img src={portfolio3} alt="" className="workimg" />
        </a>
        <a
          href="https://654e32a330e623058aec8db8--gilded-klepon-ebd4d2.netlify.app/"
          className="workimg"
        >
          <img src={portfolio4} alt="" className="workimg" />
        </a>
        <a
          href="https://65390a263989620b5dc9d6fe--deft-torrone-1fd9a2.netlify.app/"
          className="workimg"
        >
          {" "}
          <img src={portfolio5} alt="" className="workimg" />
        </a>
        <a
          href="https://650976750a2220009aa339ca--remarkable-pony-f4e608.netlify.app/"
          className="workimg"
        >
          <img src={portfolio6} alt="" className="workimg" />
        </a>
        <div ref={seemoreRef} id="seemore" style={{ display: "none" }}>
          <a href="https://friendly-sorbet-701ec6.netlify.app/">
            {" "}
            <img src={portfolio7} alt="" className="workimg" />
          </a>
          <a href="https://incredible-cat-4dd76a.netlify.app/">
            {" "}
            <img src={portfolio8} alt="" className="workimg" />
          </a>
          <a href="https://tailwind-css-application.web.app/">
            <img src={portfolio9} alt="" className="workimg" />
          </a>
        </div>
      </div>
      <button onClick={show} className="workbtn">
        See More
      </button>
    </section>
  );
};

export default Projects;
