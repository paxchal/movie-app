import React from "react";
import Facebook from "../icons/facebook.png";
import Instagram from "../icons/instagram.png";
import Twitter from "../icons/twitter.png";
import Youtube from "../icons/youtube.png";

function Footer() {
  return (
    <footer>
      <div className="socials-cnt">
        <div>
          <img className="socials-logo" src={Facebook} alt="Facebook Icon" />
        </div>
        <div>
          <img className="socials-logo" src={Instagram} alt="Instagram Icon" />
        </div>
        <div>
          <img className="socials-logo" src={Twitter} alt="Twitter Icon" />
        </div>
        <div>
          <img className="socials-logo" src={Youtube} alt="Youtube Icon" />
        </div>
      </div>
      <ul className="privacy-cnt">
        <li>
          <a href="https://hngx-stage-2.netlify.app/">Condition of Use</a>
        </li>
        <li>
          <a href="https://hngx-stage-2.netlify.app/">
            Privacy <span>&#38;</span> Policy
          </a>
        </li>
        <li>
          <a href="https://hngx-stage-2.netlify.app/">Press Room</a>
        </li>
      </ul>
      <div className="copyright-cnt">
        <p>
          <span>&#169;</span> <span>2023</span> MovieBox by Dume Paschal
        </p>
      </div>
    </footer>
  );
}

export default Footer;
