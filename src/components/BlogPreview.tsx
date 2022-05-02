import React from "react";
import { Link } from "gatsby";
import FriendlyDate from "./FriendlyDate";

export default function BlogPreview({ excerpt, title, date, slug }) {
  return (
    <div>
      <Link to={slug}>
        <h2>{title}</h2>
      </Link>
      <p>
        <FriendlyDate date={new Date(date)} />
      </p>
      <p>{excerpt}</p>
    </div>
  );
}
