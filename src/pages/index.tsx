import React from "react";
import { graphql, navigate } from "gatsby";
import PageMeta from "../components/PageMeta";
import Navbar from "../components/Navbar";

export interface BlogPostMetadata {
  title: string;
  slug: string;
  date: string;
}

interface Edge {
  node: Node;
}

interface Node {
  excerpt: string;
  frontmatter: Frontmatter;
}

interface Frontmatter {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export default function Home({ data }) {
  // TODO: massive cleanup needed here. horrible and inconsistent names
  const blogPosts = data.allMarkdownRemark.edges
    .sort(
      (a: Edge, b: Edge) =>
        new Date(a.node.frontmatter.date).getTime() -
        new Date(b.node.frontmatter.date).getTime()
    )
    .reverse();

  return (
    <div>
      <PageMeta title="Jason Telfer - Web Developer" slug="/" />
      <Navbar />
      <div className="container px-10 mt-5">
      </div>
    </div>
  );
}

export const indexPageQuery = graphql`
  query BlogPreviewQuery {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "blog" } } }) {
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
