import React from "react";
import { graphql, navigate } from "gatsby";
import { Box, Heading, Button } from "@chakra-ui/react";
import Intro from "../components/Intro";
import BlogPreview from "../components/BlogPreview";

export default function Home({ data }) {
  const blogEntries = data.allMarkdownRemark.edges;
  const mostRecent = blogEntries
    .sort(
      (a, b) =>
        new Date(a.node.frontmatter.date).getTime() -
        new Date(b.node.frontmatter.date).getTime()
    )
    .reverse()[0].node;
  return (
    <Box>
      <Box>
        <Intro />
        <Box display="flex" justifyContent="center" mt="1rem">
          <Button onClick={() => navigate("/about")}>Learn more</Button>
        </Box>
      </Box>
      <Box mt="1rem">
        <Heading size="md">Latest post</Heading>
        <Box>
          <BlogPreview
            title={mostRecent.frontmatter.title}
            date={mostRecent.frontmatter.date}
            description={mostRecent.frontmatter.description}
            excerpt={mostRecent.excerpt}
            slug={mostRecent.frontmatter.slug}
          />
          <Box display="flex" justifyContent="space-around" mt="1rem">
            <Button onClick={() => navigate(mostRecent.frontmatter.slug)}>
              Read more
            </Button>
            <Button onClick={() => navigate("/blog")}>Older posts</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export const indexPageQuery = graphql`
  query BlogPreviewQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            title
            slug
            description
            date
          }
        }
      }
    }
  }
`;
