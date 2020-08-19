import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import "./style.css";

const AddQuote = () => {
  const [admin, toggleAdmin] = useState(true);

  return (
    <div className="add-quote">
      <h2 className="page-title">Add Quote</h2>
      <form>
        <input type="text" placeholder="title" />
        <textarea placeholder="title" />
        <button>Submit</button>
      </form>
      {!admin && <Redirect to="/" />}
    </div>
  );
};

export default AddQuote;
