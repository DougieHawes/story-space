import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Videos = () => {
  const [signedIn, toggleSignedIn] = useState(true);

  return (
    <div className="page video">
      <h2 className="page-title">Videos</h2>
      <p className="add-link">
        Got any videos to add?{" "}
        {signedIn ? (
          <>
            add them <Link to="/add-video">here</Link>
          </>
        ) : (
          <>
            sign-in/sign-up <Link to="/sign-in">here</Link>
          </>
        )}
      </p>
    </div>
  );
};

export default Videos;
