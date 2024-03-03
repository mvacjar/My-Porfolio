import arrowUp from "../../assets/images/arrow_up.png";
import "./arrowUp.css";

import { HashLink as Link } from "react-router-hash-link";

export default function ArrowUp() {
  return (
    <>
      <figure>
        <Link to="/#Header" smooth={true} duration={500}>
          <img
            className="arrow-up"
            src={arrowUp}
            alt="arrow scroll up"
            loading="lazy"
          ></img>
        </Link>
      </figure>
    </>
  );
}
