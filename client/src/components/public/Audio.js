import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Audio = () => {
  const [signedIn, toggleSignedIn] = useState(true);

  return (
    <div className="page audio">
      <h2 className="page-title">Audio</h2>
      <p className="add-link">
        Got any audio to add?{" "}
        {signedIn ? (
          <>
            add it <Link to="/add-audio">here</Link>
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

export default Audio;
