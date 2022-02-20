import React from "react";
import { graphql } from "gatsby";
import { Box } from "@chakra-ui/react";
import HtmlContent from "../components/HtmlContent";

export default function BlogPost({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Box>
      <HtmlContent html={html} />
    </Box>
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
