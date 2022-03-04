import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h3>
          <Link to="/">jasont.dev</Link>
        </h3>
      </div>
      <div className="navbar-items">
        <Link to="/">blog</Link>
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
      </div>
    </div>
  );
}
