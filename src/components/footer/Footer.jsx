import github from "../../assets/images/github.png";
import linkedIn from "../../assets/images/linkedin.png";
import email from "../../assets/images/email.png";
import cv from "../../assets/images/cv.png";
import "./../../../index.css";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="Contact">
        {/* <article className="footer-container">
          <h1 className="footer-title">Let&apos;s Chat!</h1>
          <section className="form-container">
            <div className="form-info">
              <input
                className="name"
                type="text"
                name="field1"
                placeholder="Your Name"
              />
              <input
                className="email"
                type="email"
                name="field2"
                placeholder="Email"
              />
            </div>
            <textarea className="message" placeholder="Message"></textarea>
            <button className="footer-button">SEND MESSAGE</button>
          </section>
        </article> */}
        <article className="footer-logos-container">
          <section className="footer-wrapper">
            <section className="logos">
              <button className="footer-logo">
                <a
                  href="https://github.com/mvacjar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github" />
                </a>
              </button>
              <button className="footer-logo">
                <a
                  href="https://www.linkedin.com/in/mvacjar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedIn} alt="" />
                </a>
              </button>
              <button className="footer-logo">
                <a href="mailto:mvacjar@gmail.com" rel="noopener noreferrer">
                  <img src={email} alt="" />
                </a>
              </button>
              <button className="footer-logo">
                <a
                  href="https://drive.google.com/file/d/1VJjf3yXN7AOJofODHYAlqnK3fE3j69p9/view?usp=sharing"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={cv} alt="curriculum" />
                </a>
              </button>
            </section>
            <section className="footer-link-container">
              <h2 className="footer-link-title">
                Designed and developed with ❤ by{" "}
                <a
                  href="https://github.com/mvacjar/My-Porfolio"
                  rel="noopener noreferrer"
                  className="footer-logo-link"
                >
                  mvacjar
                </a>
              </h2>
            </section>
          </section>
        </article>
      </footer>
    </>
  );
}
