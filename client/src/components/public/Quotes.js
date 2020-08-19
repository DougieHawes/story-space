import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Quotes = () => {
  const [admin, toggleAdmin] = useState(true);

  return (
    <div className="page quotes">
      <h2 className="page-title">Quotes</h2>
      {admin && (
        <p className="add-link">
          Add to the Quotes <Link to="/add-quote">here</Link>
        </p>
      )}
    </div>
  );
};

export default Quotes;
