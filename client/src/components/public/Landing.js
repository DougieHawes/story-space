import React from "react";

import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import "./style.css";

const Landing = () => (
  <div className="landing">
    <h1 className="landing-title">The Story Space</h1>
    <Fade delay={2100} duration={2100}>
      <p className="landing-subtitle">Brian's Way</p>
    </Fade>
    <Fade delay={2100} duration={2100}>
      <div className="landing-links">
        <Link className="landing-link" to="/about">
          About
        </Link>
        <Link className="landing-link" to="/events">
          Events
        </Link>
        <Link className="landing-link" to="/blog">
          Blog
        </Link>
        <Link className="landing-link" to="/quotes">
          Quotes
        </Link>
        <Link className="landing-link" to="/literature">
          Literature
        </Link>
        <Link className="landing-link" to="/audio">
          Audio
        </Link>
        <Link className="landing-link" to="/images">
          Images
        </Link>
        <Link className="landing-link" to="/videos">
          Videos
        </Link>
      </div>
    </Fade>
  </div>
);

export default Landing;
