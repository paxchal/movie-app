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
          <img src={Facebook} alt="Facebook Icon" />
        </div>
        <div>
          <img src={Instagram} alt="Instagram Icon" />
        </div>
        <div>
          <img src={Twitter} alt="Twitter Icon" />
        </div>
        <div>
          <img src={Youtube} alt="Youtube Icon" />
        </div>
      </div>
      <ul className="privacy-cnt">
        <li>
          <a href="#">Conditio of Use</a>
        </li>
        <li>
          <a href="#">
            Privacy <span>&#38;</span> Policy
          </a>
        </li>
        <li>
          <a href="#">Press Room</a>
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
