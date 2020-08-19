import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Blog = () => {
  const [admin, toggleAdmin] = useState(true);

  return (
    <div className="page blog">
      <h2 className="page-title">Blog</h2>
      {admin && (
        <p className="add-link">
          Add to the Blog <Link to="/add-blog">here</Link>
        </p>
      )}
    </div>
  );
};

export default Blog;
