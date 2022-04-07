import React from "react";
import { graphql } from "gatsby";
import PageMeta from "../components/PageMeta";

export default function MarkdownContent({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <PageMeta
        title={`${frontmatter.title} - Jason Telfer`}
        slug={frontmatter.slug}
      />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
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
