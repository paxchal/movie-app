import React from "react";

import logo from "../icons/Logo.png";

import Menu from "../icons/Menu.png";
import Rating from "../icons/Rating.png";
import Play from "../icons/icon-play.png";

function Header() {
  return (
    <header>
      <div className="Header-cnt">
        <div className="top-bar center">
          <div>
            <img src={logo} alt="Movie Logo" />
          </div>
          <div className="search-region">
            <input
              className="search-input"
              type="text"
              placeholder="What do you want to watch?"
            />
          </div>
          <div className="right-region">
            <button className="signin-button">Sign in</button>
            <div>
              <a href="https://google.com">
                <img src={Menu} alt="Menu Icon" />
              </a>
            </div>
          </div>
        </div>
        <div className=" hero center">
          <div>
            <div className="title-layout">
              <p className="title-head">John Wick 3 : Parabellum</p>
            </div>
            <div className="rating-layout">
              <img src={Rating} alt="Rating Icon" />
            </div>
            <div className="description-layout">
              <p className="description">
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
            </div>
            <div>
              <button className="btn btn-home ">
                <div>
                  <img className="play-icon" src={Play} alt="Play Icon" />
                </div>

                <p>WATCH TRAILER</p>
              </button>
            </div>
          </div>
          <div className="empty-hero-space"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
