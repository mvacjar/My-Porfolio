import ICON_LIST from './icon-list.js';
import "./../../../index.css";
import "./skills.css";

export default function Skills() {
  return (
    <div>
      <article className="skills-container" id="Skills">
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
            {ICON_LIST.map((icon) => (
              <div key={icon.id} className="skills-div">
                <img src={icon.src} alt={icon.alt} className="skills-img" loading="lazy"/>
                <p className="skills-text">{icon.alt}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}





 {/* <div className="skills-section-wrapper">
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
              <p className="skills-text">JAVASCRIPT</p>
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
                src={next}
                alt="nodejs icon"
                loading="lazy"
              />
              <p className="skills-text">NEXT</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={nodejs}
                alt="nodejs icon"
                loading="lazy"
              />
              <p className="skills-text">NODE</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={sql}
                alt="nodejs icon"
                loading="lazy"
              />
              <p className="skills-text">SQL</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={psql}
                alt="nodejs icon"
                loading="lazy"
              />
              <p className="skills-text">POSTGRESQL</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={postman}
                alt="nodejs icon"
                loading="lazy"
              />
              <p className="skills-text">POSTMAN</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={bootstrap}
                alt="boostrap icon"
                loading="lazy"
              />
              <p className="skills-text">BOOTSTRAP</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={tailwind}
                alt="tailwind icon"
                loading="lazy"
              />
              <p className="skills-text">TAILWIND</p>
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
                alt="github icon"
                loading="lazy"
              />
              <p className="skills-text">GITHUB</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={trello}
                alt="nodejs icon"
                loading="lazy"
              />
              <p className="skills-text">TRELLO</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={ps}
                alt="photoshop icon"
                loading="lazy"
              />
              <p className="skills-text">PHOTOSHOP</p>
            </div>
            <div className="skills-div">
              <img
                className="skills-img"
                src={ai}
                alt="nodejs icon"
                loading="lazy"
              />
              <p className="skills-text">ILLUSTRATOR</p>
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
          </div> */}