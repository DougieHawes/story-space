import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import "./style.css";

const AddVideo = () => {
  const [signedIn, toggleSignedIn] = useState(true);
  const [instructions, toggleInstructions] = useState(true);

  return (
    <div className="page add-video">
      <h2 className="page-title">Add Video</h2>
      <form className="form">
        <input className="input" type="text" placeholder="title" />
        <textarea className="text-area" placeholder="enter iframe here" />
        <p className="intructions-open">
          Need advice? click{" "}
          <span onClick={() => toggleInstructions(!instructions)}>here</span>
        </p>
        <div className="intructions">
          <ul>
            <li>Upload to a streaming platform (e.g. YouTube)</li>
            <li>Find share button</li>
            <li>Click "copy iFrame"</li>
            <li>Paste in box above</li>
            <li>Click "Submit" and view your video</li>
          </ul>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {!signedIn && <Redirect to="/" />}
    </div>
  );
};

export default AddVideo;
