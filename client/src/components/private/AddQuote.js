import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import "./style.css";

const AddQuote = () => {
  const [admin, toggleAdmin] = useState(true);

  return (
    <div className="page add-quote">
      <h2 className="page-title">Add Quote</h2>
      <form className="form">
        <input className="input" type="text" placeholder="title" />
        <textarea className="text-area" placeholder="title" />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {!admin && <Redirect to="/" />}
    </div>
  );
};

export default AddQuote;
