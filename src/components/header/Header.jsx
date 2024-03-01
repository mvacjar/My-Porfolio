import nav_logo from "../../assets/images/nav_logo.jpeg";
import github from "../../assets/images/github.png";
import linkedIn from "../../assets/images/linkedin.png";
import email from "../../assets/images/email.png";
import arrow from "../../assets/images/arrow_down.png";
import "../../../index.css";
import "./header.css";

import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  return (
    <>
      <div className="header-container" id="Header">
        <div className="arrow-container">
          <p className="arrow-text">SCROLL</p>
          <img className="arrow-img" src={arrow} alt="arrow down" />
        </div>
        <div className="black_wall">
          <nav className="nav-container">
            <figure className="nav-logo">
              <img src={nav_logo} className="nav-logo" alt="Profile picture" />
            </figure>
            <ul className="nav-links">
              <li>
                <Link
                  to="/#Header"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  MARIA
                </Link>
              </li>
              <li>
                <Link
                  to="/#Projects"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="/#About"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/#Contact"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <main>
            <article className="main-container">
              <section className="main-logos">
                <button className="main-logo">
                  <a
                    href="https://github.com/mvacjar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>
                </button>
                <button className="main-logo">
                  <a
                    href="https://www.linkedin.com/in/mvacjar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedIn} alt="" />
                  </a>
                </button>
                <button className="main-logo">
                  <a href="mailto:mvacjar@gmail.com" rel="noopener noreferrer">
                    <img src={email} alt="" />
                  </a>
                </button>
              </section>
              <section className="main-title">
                <h1 className="main-name">MARIA VACA JAREÑO</h1>
                <h2 className="main-profession">FRONTEND DEVELOPER</h2>
                <div className="main-container-button">
                  <button className="main-button">
                    <a
                      href="mailto:mvacjar@gmail.com"
                      rel="noopener noreferrer"
                    >
                      HIRE ME
                    </a>
                  </button>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>
    </>
  );
}
