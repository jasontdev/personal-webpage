import React from "react";
import Navbar from "./Navbar";
import "../styles.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="centered">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
