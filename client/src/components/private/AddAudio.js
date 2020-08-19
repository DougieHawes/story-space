import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import "./style.css";

const AddAudio = () => {
  const [signedIn, toggleSignedIn] = useState(true);

  return (
    <div className="page add-audio">
      <h2 className="page-title">Add Audio</h2>
      <form className="form">
        <input className="input" type="text" placeholder="title" />
        <input className="input" type="file" />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {!signedIn && <Redirect to="/" />}
    </div>
  );
};

export default AddAudio;
