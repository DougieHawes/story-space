import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Signup = () => {
  return (
    <div className="page signup">
      <h2 className="page-title">Sign-up</h2>
      <p className="sign-link">
        Already a member? <Link to="/sign-in">Sign-In</Link> here
      </p>
      <form className="form">
        <input className="input" type="text" placeholder="enter name..." />
        <input className="input" type="text" placeholder="enter email..." />
        <input
          className="input"
          type="password"
          placeholder="enter password..."
        />
        <input
          className="input"
          type="password"
          placeholder="re-enter password..."
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
