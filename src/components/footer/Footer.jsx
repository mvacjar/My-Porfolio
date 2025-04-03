import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import github from "/images/github.png";
import linkedIn from "/images/linkedin.png";
import email from "/images/email.png";
import phone from "/images/phone.svg";
import cv from "/images/cv.png";
import "./../../../index.css";
import "./footer.css";

export default function Footer() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(e);
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully! 🦾");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong 🥲, please try again later!");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
    e.target.reset();
  };

  return (
    <>
      <footer className="footer" id="Contact">
        <form className="chat-container" ref={form} onSubmit={sendEmail}>
          <h1 className="chat-title">Let&apos;s Chat!</h1>
          <section className="form-container">
            <div className="form-info">
              <input
                required
                className="name"
                type="text"
                name="user_name"
                placeholder="Your Name"
              />
              <input
                required
                className="email"
                type="email"
                name="user_email"
                placeholder="Email"
              />
            </div>
            <input
              required
              className="subject"
              type="text"
              name="subject"
              placeholder="Email Subject"
            />
            <textarea
              required
              className="message"
              placeholder="Message"
              name="message"
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="footer-button"
            >
              {isLoading ? "LOADING.." : "SEND MESSAGE"}
              <ToastContainer />
            </button>
          </section>
        </form>
        <article className="footer-logos-container">
          <section className="footer-wrapper">
            <section className="logos">
              <button className="footer-logo">
                <a
                  href="https://github.com/mvacjar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github logo" loading="lazy" />
                </a>
              </button>
              <button className="footer-logo">
                <a
                  href="https://www.linkedin.com/in/mvacjar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedIn} alt="linkedin logo" loading="lazy" />
                </a>
              </button>
              <button className="footer-logo">
                <a
                  href={import.meta.env.VITE_CV}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={cv} alt="curriculum logo" loading="lazy"  />
                </a>
              </button>
              <button className="footer-logo">
                <a
                  href={`mailto:${import.meta.env.VITE_EMAIL}`}
                  rel="noopener noreferrer"
                >
                  <img src={email} alt="email logo" loading="lazy" />
                </a>
              </button>
              <button className="footer-logo">
                <a
                  href={`tel:${import.meta.env.VITE_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={phone} alt="phone" loading="lazy" />
                </a>
              </button>
            </section>
            <section className="footer-link-container">
              <h2 className="footer-link-title">
                Designed and developed with ❤ by{" "}
                <a
                  href="https://github.com/mvacjar/My-Porfolio"
                  rel="noopener noreferrer"
                  target_blank="true"
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
