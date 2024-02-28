import nav_logo from "../assets/images/nav_logo.jpeg";
import github from "../assets/images/github.png";
import linkedIn from "../assets/images/linkedin.png";
import email from "../assets/images/email.png";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="body-container">
        <div className="arrow">
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
                  <img src={github} alt="" href="" />
                </button>
                <button className="main-logo">
                  <img
                    src={linkedIn}
                    alt=""
                    href="https://www.linkedin.com/in/mvacjar/"
                  />
                </button>
                <button className="main-logo">
                  <img src={email} alt="" />
                </button>
              </section>
              <section className="main-title">
                <h1 className="main-name">MARIA VACA JAREÑO</h1>
                <h2 className="main-profession">FRONTEND DEVELOPER</h2>
                <div className="main-container-button">
                  <button className="main-button">HIRE ME</button>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>
    </>
  );
}
