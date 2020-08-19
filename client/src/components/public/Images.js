import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Images = () => {
  const [signedIn, toggleSignedIn] = useState(true);

  return (
    <div className="page images">
      <h2 className="page-title">Images</h2>
      <p className="add-link">
        Got any images to add?{" "}
        {signedIn ? (
          <>
            add them <Link to="/add-images">here</Link>
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

export default Images;
