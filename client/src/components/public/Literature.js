import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Literature = () => {
  const [signedIn, toggleSignedIn] = useState(true);

  return (
    <div className="page literature">
      <h2 className="page-title">Literature</h2>
      <p className="add-link">
        Got any literature to add?{" "}
        {signedIn ? (
          <>
            add it <Link to="/add-literature">here</Link>
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

export default Literature;
