import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Signin = () => {
  return (
    <div className="page signin">
      <h2 className="page-title">Sign-In</h2>
      <p className="sign-link">
        Not yet a member? <Link to="/sign-up">Sign-Up</Link> here
      </p>
      <form className="form">
        <input className="input" type="text" placeholder="email..." />
        <input className="input" type="text" placeholder="password..." />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
