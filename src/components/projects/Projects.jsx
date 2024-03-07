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
                  <img
                    src={hinder}
                    className="card-image"
                    alt="Mockup"
                    loading="lazy"
                  />
                </a>
              </figure>
              <div className="description-container">
                <span className="card-project-description">
                  Hinder is a social media platform designed to foster
                  connections among students at Hyper Island. The aim of this
                  project was to learn more and to practice React and Tailwind.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/Hinder-App"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" loading="lazy" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://hinder-hyperisland.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={website} alt="website" loading="lazy" />
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
                  <img
                    src={weather}
                    className="card-image"
                    alt="Mockup"
                    loading="lazy"
                  />
                </a>
              </figure>
              <div className="description-container">
                <span className="card-project-description">
                  With this weather app, you can check your actual weather by
                  geolocation and any city you like to travel. The aim of this
                  project was to learn more about and to practice React, JS, and
                  CSS.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/react-weather-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" loading="lazy" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://peach-weather-app.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={website} alt="website" loading="lazy" />
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
                  Amazon&apos;s Snake is the clasic game but now with new
                  features! A bomb and 4 different speeds. Check it out!. The
                  aim of this project was to learn more about and to practice
                  HTML, JS, and CSS.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/amazons-snake"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" loading="lazy" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://amazon-snake.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={website} alt="github" loading="lazy" />
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
                  <img
                    src={plants}
                    className="card-image"
                    alt="Mockup"
                    loading="lazy"
                  />
                </a>
              </figure>
              <div className="description-container">
                <span className="card-project-description">
                  Luxury Designs is a website that helps you design your spaces
                  with plants. The tools used for this project were JS, HTML,
                  and CSS. The project aimed to learn more about SEO.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/Design-Web-SEO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" loading="lazy" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://luxurydesigninteriors.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={website} alt="website" loading="lazy" />
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
