import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import "./style.css";

const AddImage = () => {
  const [signedIn, toggleSignedIn] = useState(true);

  return (
    <div className="page add-image">
      <h2 className="page-title">Add Image</h2>
      <form className="form">
        <input className="input" type="text" placeholder="title" />
        <textarea className="text-area" placeholder="title" />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {!signedIn && <Redirect to="/" />}
    </div>
  );
};

export default AddImage;
