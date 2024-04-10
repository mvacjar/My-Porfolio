import React from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import * as FaIcons from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <IconContext.Provider value={{ color: "#f1edde" }}>
      <nav className="nav">
        <div onClick={toggleMenu} className="menu-wrapper">
          {isOpen ? (
            <ImCross size={25} color="#F1911D" />
          ) : (
            <FaIcons.FaBars size={30} color="#F1911D" />
          )}
          {isOpen && (
            <ul className={isOpen ? "nav-links active" : "nav-links"}>
              <li className="nav-link">
                <Link
                  to="/#Skills"
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  SKILLS
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/#Projects"
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/#About"
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  ABOUT ME
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/#Contact"
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
