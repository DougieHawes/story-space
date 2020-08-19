import React, { useState } from "react";

import { Slide } from "react-reveal";
import { Link } from "react-router-dom";

import "./style.css";

const Navbar = () => {
  const [signedIn, toggleSignedIn] = useState(true);
  const [showNav, toggleShowNav] = useState(false);

  return (
    <div className="navbar">
      <Slide left>
        <div
          className={`navbar-links ${showNav && "navbar-links-active"}`}
          onMouseLeave={() => toggleShowNav(false)}
        >
          <Link
            className="navbar-link"
            to="/about"
            onClick={() => toggleShowNav(false)}
          >
            About
          </Link>
          <Link
            className="navbar-link"
            to="/events"
            onClick={() => toggleShowNav(false)}
          >
            Events
          </Link>
          <Link
            className="navbar-link"
            to="/blog"
            onClick={() => toggleShowNav(false)}
          >
            Blog
          </Link>
          <Link
            className="navbar-link"
            to="/quotes"
            onClick={() => toggleShowNav(false)}
          >
            Quotes
          </Link>
          <Link
            className="navbar-link"
            to="/literature"
            onClick={() => toggleShowNav(false)}
          >
            Literature
          </Link>
          <Link
            className="navbar-link"
            to="/audio"
            onClick={() => toggleShowNav(false)}
          >
            Audio
          </Link>
          <Link
            className="navbar-link"
            to="/images"
            onClick={() => toggleShowNav(false)}
          >
            Images
          </Link>
          <Link
            className="navbar-link"
            to="/videos"
            onClick={() => toggleShowNav(false)}
          >
            Videos
          </Link>
        </div>
      </Slide>
      <Slide delay={2100} down>
        <div className="navbar-top">
          <div className="navbar-icon" onClick={() => toggleShowNav(!showNav)}>
            <div className={`bar bar1 ${showNav && "bar1-active"}`}></div>
            <div className={`bar bar2 ${showNav && "bar2-active"}`}></div>
            <div className={`bar bar3 ${showNav && "bar3-active"}`}></div>
          </div>
          {signedIn ? (
            <Link
              className={`navbar-sign-link ${
                showNav && "nav-sign-link-active"
              }`}
              to="/profile"
            >
              <i className="far fa-user-circle"></i>
              *username*
            </Link>
          ) : (
            <Link
              className={`navbar-sign-link ${
                showNav && "nav-sign-link-active"
              }`}
              to="/sign-in"
            >
              <i className="fas fa-sign-in-alt"></i>Sign-In
            </Link>
          )}
          <Link
            className="title-link"
            to="/"
            onClick={() => toggleShowNav(false)}
          >
            <h1 className="title">The Story Space</h1>
          </Link>
        </div>
      </Slide>
    </div>
  );
};

export default Navbar;
