import react from "../../assets/images/reactt.svg";
import html from "../../assets/images/html5.png";
import css from "../../assets/images/css3.png";
import js from "../../assets/images/jss.png";
import seo from "../../assets/images/seo.png";
import github from "../../assets/images/github.png";

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
        <section className="skills-section">
          <div className="skills-div">
            <img className="skills-img" src={react} alt="arrow down" />
            <p className="skills-text">REACT</p>
          </div>
          <div className="skills-div">
            <img className="skills-img" src={js} alt="arrow down" />
            <p className="skills-text">JS</p>
          </div>
          <div className="skills-div">
            <img className="skills-img" src={seo} alt="arrow down" />
            <p className="skills-text">SEO</p>
          </div>
          <div className="skills-div">
            <img className="skills-img" src={html} alt="arrow down" />
            <p className="skills-text">HTML</p>
          </div>
          <div className="skills-div">
            <img className="skills-img" src={css} alt="arrow down" />
            <p className="skills-text">CSS</p>
          </div>
          <div className="skills-div">
            <img className="skills-img" src={github} alt="arrow down" />
            <p className="skills-text">GITHUB</p>
          </div>
        </section>
      </article>
    </div>
  );
}
