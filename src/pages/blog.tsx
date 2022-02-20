import { Box, Title, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { graphql, navigate } from "gatsby";
import BlogIndex from "../components/BlogIndex";
import BlogPreview from "../components/BlogPreview";

export default function Blog({ data }) {
  const entries = data.allMarkdownRemark.edges.map(edge => ({
    title: edge.node.frontmatter.title,
    slug: edge.node.frontmatter.slug,
    date: edge.node.frontmatter.date,
  }));

  const mostRecent = data.allMarkdownRemark.edges
    .sort(
      (a, b) =>
        new Date(a.node.frontmatter.date).getDate() -
        new Date(b.node.frontmatter.date).getDate()
    )
    .reverse()[0].node;

  return (
    <Box>
      <Heading size="lg">Blog</Heading>
      <Box mt="1rem">
        <Heading size="md">Latest post</Heading>
        <BlogPreview
          title={mostRecent.frontmatter.title}
          date={mostRecent.frontmatter.date}
          excerpt={mostRecent.excerpt}
          title={mostRecent.frontmatter.title}
          slug={mostRecent.frontmatter.slug}
        />
        <Box display="flex" justifyContent="center" mt="1rem">
          <Button onClick={() => navigate(mostRecent.frontmatter.slug)}>
            Read more
          </Button>
        </Box>
      </Box>
      <Box mt="1rem">
        <Heading size="md">Older posts</Heading>
        <BlogIndex entries={entries} />
      </Box>
    </Box>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`;
