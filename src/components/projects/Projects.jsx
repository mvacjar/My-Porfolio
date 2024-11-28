import inksired from "/images/inksired.png";
import amazonSnake from "/images/amazon_snake.png";
import weather from "/images/weather.png";
import github from "/images/github.png";
import hinder from "/images/hinder.png";
import website from "/images/website.png";
import fullstack from "/images/fullstack.png";
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
                  href="https://inksired.vercel.app/"
                  target="_blank"
                >
                  Inksired e-Commerce
                </a>
              </h2>
              <figure className="card-image-container">
                <a href="https://github.com/mvacjar/ToDoFullstack">
                  <img
                    src={inksired}
                    className="card-image"
                    alt="Mockup"
                    loading="lazy"
                  />
                </a>
              </figure>
              <div className="description-container">
                <span className="card-project-description">
                  Complete website built from scratch for the Hyper Island Frontend Developer final project, featuring a scalable Next.js frontend optimized for SEO. Implemented with JavaScript, React, and several libraries like Yup, Formik, Lodash, and Luxon for streamlined form handling and data manipulation. Utilized Strapi for content management, Node.js for server-side functionality, and Stripe for payments. Deployed using Vercel and Railway with cloud storage on AWS.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/inksired-web"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" loading="lazy" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://inksired.vercel.app/"
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
                  href="https://todolist-backend-xi.vercel.app/"
                  target="_blank"
                >
                  ToDo List FullStack
                </a>
              </h2>
              <figure className="card-image-container">
                <a href="https://github.com/mvacjar/ToDoFullstack">
                  <img
                    src={fullstack}
                    className="card-image"
                    alt="Mockup"
                    loading="lazy"
                  />
                </a>
              </figure>
              <div className="description-container">
                <span className="card-project-description">
                  In this full-stack ToDo List you can create, update and delete
                  tasks. And all in a webpage with a cyberpunk design. The aim
                  of this project was to learn more about React, Node, Express,
                  and PostgreSQL.
                </span>
                <div className="main-logos-container">
                  <button className="main-logo">
                    <a
                      href="https://github.com/mvacjar/ToDoFullstack"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="github" loading="lazy" />
                    </a>
                  </button>
                  <button className="main-logo">
                    <a
                      href="https://todolist-backend-xi.vercel.app/"
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
          </div>
        </article>
      </div>
    </>
  );
}
