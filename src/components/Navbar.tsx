import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <div className="navbar-brand">jasont.dev</div>
      </div>
      <div className="navbar-items">
        <Link
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/"
        >
          blog
        </Link>
        <Link
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/about"
        >
          about
        </Link>
        <Link
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/projects"
        >
          projects
        </Link>
      </div>
    </div>
  );
}
