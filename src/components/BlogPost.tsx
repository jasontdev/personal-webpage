import React from "react";
import HtmlContent from "./HtmlContent";

export default function BlogPost({ title, date, description, html }) {
  return (
    <div>
      <HtmlContent html={html} />
    </div>
  );
}
