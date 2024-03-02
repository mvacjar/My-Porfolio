import hinder from "../../assets/images/hinder.png";
import amazonSnake from "../../assets/images/amazon_snake.png";
import weather from "../../assets/images/weather.png";
import plants from "../../assets/images/plants.png";
import github from "../../assets/images/github.png";
import website from "../../assets/images/website.png";
import "./../../../index.css";
import "./projects.css";

export default function Projects() {
  return (
    <>
      <div className="project-container" id="Projects">
        <article className="project-wrapper">
          <div className="marquee-container">
            <div className="marquee-wrapper">
              <h1 className="marquee-title">PROJECTS</h1>
              <h1 className="marquee-title">PROJECTS</h1>
              <h1 className="marquee-title">PROJECTS</h1>
              <h1 className="marquee-title">PROJECTS</h1>
            </div>
            <div className="marquee-wrapper">
              <h1 className="marquee-title">PROJECTS</h1>
              <h1 className="marquee-title">PROJECTS</h1>
              <h1 className="marquee-title">PROJECTS</h1>
              <h1 className="marquee-title">PROJECTS</h1>
            </div>
          </div>

          <div className="card-project-container">
            <section className="card-project-item">
              <h2 className="card-project-title">
                <a
                  className="title-link"
                  href="https://hinder-hyperisland.netlify.app/"
                  target="_blank"
                >
                  Hinder App
                </a>
              </h2>
              <figure className="card-image-container">
                <a href="https://hinder-hyperisland.netlify.app/">
                  <img src={hinder} className="card-image" alt="Mockup" />
                </a>
              </figure>
              <div className="description-container">
                <span className="card-project-description">
                  Hinder is an app to meet people inside at Hyper Island. It has
                  been develop using React and Tailwind to make it.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/Hinder-App"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://hinder-hyperisland.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={website} alt="github" />
                    </a>
                  </button>
                </div>
              </div>
            </section>
            <section className="card-project-item">
              <h2 className="card-project-title">
                {" "}
                <a
                  className="title-link"
                  href="https://peach-weather-app.netlify.app/"
                  target="_blank"
                >
                  Weather App
                </a>
              </h2>
              <figure className="card-image-container">
                <a href="https://peach-weather-app.netlify.app/">
                  <img src={weather} className="card-image" alt="Mockup" />
                </a>
              </figure>
              <div className="description-container">
                <span className="card-project-description">
                  With this weather app, you can check the weather any city. It
                  has been develop using React, JS, and CSS.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/react-weather-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://peach-weather-app.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={website} alt="github" />
                    </a>
                  </button>
                </div>
              </div>
            </section>
            <section className="card-project-item">
              <h2 className="card-project-title">
                <a
                  className="title-link"
                  href="https://amazon-snake.netlify.app/"
                  target="_blank"
                >
                  Amazon&apos;s Snake
                </a>
              </h2>
              <figure className="card-image-container">
                <a href="https://amazon-snake.netlify.app/">
                  <img src={amazonSnake} className="card-image" alt="Mockup" />
                </a>
              </figure>
              <div className="description-container">
                <span className="card-project-description">
                  Amazon&apos;s Snake is the clasic but now with new features!
                  It has been develop using HTML, JS, and CSS.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/amazons-snake"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://amazon-snake.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={website} alt="github" />
                    </a>
                  </button>
                </div>
              </div>
            </section>
            <section className="card-project-item">
              <h2 className="card-project-title">
                <a
                  className="title-link"
                  href="https://luxurydesigninteriors.netlify.app/"
                  target="_blank"
                >
                  Luxury Designs
                </a>
              </h2>
              <figure className="card-image-container">
                <a href="https://luxurydesigninteriors.netlify.app/">
                  <img src={plants} className="card-image" alt="Mockup" />
                </a>
              </figure>
              <div className="description-container">
                <span className="card-project-description">
                  Luxury Designs is a website to desing your spaces with plants.
                  It has been develop using JS, HMTL and CSS. The aim of this
                  project was to learn more about SEO.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/Design-Web-SEO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://luxurydesigninteriors.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={website} alt="github" />
                    </a>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
