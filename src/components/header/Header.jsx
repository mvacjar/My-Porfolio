import nav_logo from "../../assets/images/nav_logo.jpeg";
import github from "../../assets/images/github.png";
import linkedIn from "../../assets/images/linkedin.png";
import email from "../../assets/images/email.png";
import "../../../index.css";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="black_wall">
          <nav className="nav-container">
            <figure className="nav-logo">
              <img src={nav_logo} className="nav-logo" alt="Profile picture" />
            </figure>
            <ul className="nav-links">
              <li>
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li>
                <a className="nav-link" href="/projects">
                  PROJECTS
                </a>
              </li>
              <li>
                <a className="nav-link" href="/about">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="nav-link" href="/contact">
                  CONTACT
                </a>
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
