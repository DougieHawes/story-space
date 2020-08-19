import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import "./style.css";

const AddLanding = () => {
  const [admin, toggleAdmin] = useState(true);

  return (
    <div className="add-landing">
      <h2 className="page-title">Add Landing</h2>
      <form>
        <input type="text" placeholder="title" />
        <textarea placeholder="title" />
        <button>Submit</button>
      </form>
      {!admin && <Redirect to="/" />}
    </div>
  );
};

export default AddLanding;
