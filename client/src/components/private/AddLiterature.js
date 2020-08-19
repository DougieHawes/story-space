import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import "./style.css";

const AddLiterature = () => {
  const [signedIn, toggleSignedIn] = useState(true);
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const { title, content } = state;

  const placeholderArray = [
    "Dispense your genius here...",
    "Make your Mark...",
    "Don't think it, write it...",
  ];

  return (
    <div className="page add-page add-literature">
      <h2 className="page-title">Add Literature</h2>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="title"
          value={title}
        />
        <textarea
          className="text-area"
          placeholder={
            placeholderArray[
              Math.floor(Math.random() * placeholderArray.length)
            ]
          }
          value={content}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {!signedIn && <Redirect to="/" />}
    </div>
  );
};

export default AddLiterature;
