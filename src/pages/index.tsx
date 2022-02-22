import React from "react";
import { graphql, navigate } from "gatsby";
import { Text, Box, Heading, Button } from "@chakra-ui/react";
import BlogPreview from "../components/BlogPreview";
import BlogIndex from "../components/BlogIndex";
import PageMeta from "../components/PageMeta";

interface BlogPostMetadata {
  title: string;
  slug: string;
  date: string;
}

export default function Home({ data }) {
  // TODO: massive cleanup needed here. horrible and inconsistent names
  const blogPosts = data.allMarkdownRemark.edges;
  const mostRecent = blogPosts
    .sort(
      (a, b) =>
        new Date(a.node.frontmatter.date).getTime() -
        new Date(b.node.frontmatter.date).getTime()
    )
    .reverse()[0].node;

  const posts: BlogPostMetadata[] = data.allMarkdownRemark.edges.map(edge => ({
    title: edge.node.frontmatter.title,
    slug: edge.node.frontmatter.slug,
    date: edge.node.frontmatter.date,
  }));

  return (
    <Box>
      <PageMeta title="Jason Telfer - Web Developer" slug="/" />
      <Box>
        <Text>
          Hi, I'm Jason Telfer, web developer from Brisbane, Australia.
        </Text>
      </Box>
      <Box>
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
            excerpt={mostRecent.excerpt}
            slug={mostRecent.frontmatter.slug}
          />
          <Box display="flex" justifyContent="center" mt="1rem">
            <Button onClick={() => navigate(mostRecent.frontmatter.slug)}>
              Read more
            </Button>
          </Box>
          {posts.length > 1 ? (
            <Box mt="1rem">
              <Heading size="md">Older posts</Heading>
              <BlogIndex posts={posts.slice(0, posts.length - 2)} />
            </Box>
          ) : (
            <div></div>
          )}
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
