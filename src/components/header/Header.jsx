import github from '../../assets/images/github.png';
import linkedIn from '../../assets/images/linkedin.png';
import email from '../../assets/images/email.png';
import phone from '../../assets/images/phone.svg';
import cv from '../../assets/images/cv.png';
import arrow from '../../assets/images/arrow_down.png';
import logo from '../../assets/images/LogoDark.svg';
import '../../../index.css';
import './header.css';

import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../navbar/Navbar';

export default function Header() {
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
                  to='/#Skills'
                  smooth={true}
                  duration={500}
                  className='link-title'
                >
                  SKILLS
                </Link>
              </li>
              <li className='navbar-link'>
                <Link
                  to='/#Projects'
                  smooth={true}
                  duration={500}
                  className='link-title'
                >
                  PROJECTS
                </Link>
              </li>
              <li className='navbar-link'>
                <Link
                  to='/#About'
                  smooth={true}
                  duration={500}
                  className='link-title'
                >
                  ABOUT
                </Link>
              </li>
              <li className='navbar-link'>
                <Link
                  to='/#Contact'
                  smooth={true}
                  duration={500}
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
                    <img src={cv} alt='curriculum' />
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
                <div className='main-container-button'>
                  <button className='main-button'>
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
