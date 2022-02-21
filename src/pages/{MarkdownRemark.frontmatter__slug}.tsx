import React from "react";
import { graphql } from "gatsby";
import HtmlContent from "../components/HtmlContent";

export default function BlogPost({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return <HtmlContent html={html} />;
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;
