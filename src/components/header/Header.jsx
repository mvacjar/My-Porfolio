import github from '/images/github.png';
import linkedIn from '/images/linkedin.png';
import email from '/images/email.png';
import phone from '/images/phone.svg';
import cv from '/images/cv.png';
import arrow from '/images/arrow_down.png';
import logo from '/images/LogoDark.svg';
import '../../../index.css';
import './header.css';

import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

export default function Header() {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='header-container' id='Header'>
        <div className='arrow-container'>
          <p className='arrow-text'>SCROLL</p>
          <img
            className='arrow-img'
            src={arrow}
            alt='arrow down'
            loading='lazy'
          />
        </div>
        <div className='black_wall'>
          <nav className='navbar-container'>
            <ul className='navbar-links'>
              <figure>
                <img className='logo' src={logo} alt='Dark logo' />
              </figure>
              <li className='navbar-link'>
                <Link
                  to='/'
                  onClick={() => smoothScroll('Skills')}
                  className='link-title'
                >
                  SKILLS
                </Link>
              </li>
              <li className='navbar-link'>
                <Link
                  to='/'
                  onClick={() => smoothScroll('Projects')}
                  className='link-title'
                >
                  PROJECTS
                </Link>
              </li>
              <li className='navbar-link'>
                <Link
                  to='/about'
                  onClick={() => smoothScroll('About')}
                  className='link-title'
                >
                  ABOUT
                </Link>
              </li>
              <li className='navbar-link'>
                <Link
                  to='/'
                  onClick={() => smoothScroll('Contact')}
                  className='link-title'
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <Navbar />
          <main>
            <article className='main-container'>
              <section className='main-logos'>
                <button className='main-logo'>
                  <a
                    href='https://github.com/mvacjar'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={github} alt='github' loading='lazy' />
                  </a>
                </button>
                <button className='main-logo'>
                  <a
                    href='https://www.linkedin.com/in/mvacjar/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={linkedIn} alt='linkedin' loading='lazy' />
                  </a>
                </button>
                <button className='main-logo'>
                  <a
                    href={import.meta.env.VITE_CV}
                    download
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={cv} alt='curriculum'  />
                  </a>
                </button>
                <button className='main-logo'>
                  <a
                    href={`mailto:${import.meta.env.VITE_EMAIL}`}
                    rel='noopener noreferrer'
                  >
                    <img src={email} alt='gmail' />
                  </a>
                </button>
                <button className='main-logo'>
                  <a
                    href={`tel:${import.meta.env.VITE_PHONE}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={phone} alt='phone' loading='lazy' />
                  </a>
                </button>
              </section>
              <section className='main-title'>
                <h1 className='main-name'>MARIA VACA JAREÑO</h1>
                <h2 className='main-profession'>FRONTEND DEVELOPER</h2>
                <div className='main-container-hireMe-button'>
                  <button className='main-hireMe-button'>
                    <a
                      href={`mailto:${import.meta.env.VITE_EMAIL}`}
                      rel='noopener noreferrer'
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
