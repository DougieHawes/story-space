import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Events = () => {
  const [admin, toggleAdmin] = useState(true);
  return (
    <div className="page events">
      <h2 className="page-title">Events</h2>
      {admin && (
        <p className="add-link">
          Add to the Events <Link to="/add-event">here</Link>
        </p>
      )}
    </div>
  );
};

export default Events;
