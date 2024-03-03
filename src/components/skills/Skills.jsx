import react from "../../assets/images/react.svg";
import html from "../../assets/images/html5.png";
import css from "../../assets/images/css3.png";
import js from "../../assets/images/js.png";
import seo from "../../assets/images/seo.png";
import github from "../../assets/images/github.png";
import wip from "../../assets/images/wip.png";

import "./../../../index.css";
import "./skills.css";

export default function Skills() {
  return (
    <div>
      <article className="skills-container">
        <div className="marquee-skills-container">
          <div className="marquee-skills-wrapper">
            <h1 className="marquee-skills-title">MY KEY COMPETENCES</h1>
            <h1 className="marquee-skills-title">MY KEY COMPETENCES</h1>
          </div>
          <div className="marquee-skills-wrapper">
            <h1 className="marquee-skills-title">MY KEY COMPETENCES</h1>
            <h1 className="marquee-skills-title">MY KEY COMPETENCES</h1>
          </div>
        </div>
        <section className="skills-section-container">
          <div className="skills-section-wrapper">
            <div className="skills-div">
              <img
                className="skills-img"
                src={react}
                alt="react icon"
                loading="lazy"
              />
              <p className="skills-text">REACT</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={js}
                alt="js icon"
                loading="lazy"
              />
              <p className="skills-text">JS</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={html}
                alt="html icon"
                loading="lazy"
              />
              <p className="skills-text">HTML</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={css}
                alt="css icon"
                loading="lazy"
              />
              <p className="skills-text">CSS</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={seo}
                alt="SEO icon"
                loading="lazy"
              />
              <p className="skills-text">SEO</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={github}
                alt=" gihut icon"
                loading="lazy"
              />
              <p className="skills-text">GITHUB</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={wip}
                alt="work in progress icon"
                loading="lazy"
              />
              <p className="skills-text">AND MORE</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
