import React from "react";
import { graphql } from "gatsby";
import PageMeta from "../components/PageMeta";
import Navbar from "../components/Navbar";
import {
  BlogPreview,
  BlogPreviewQueryNode,
  BlogPreviewQueryEdge,
} from "../components/BlogPreview";

export default function Home({ data }) {
  // TODO: massive cleanup needed here. horrible and inconsistent names
  const blogPosts = data.allMarkdownRemark.edges
    .sort(
      (a: BlogPreviewQueryEdge, b: BlogPreviewQueryEdge) =>
        new Date(a.node.frontmatter.date).getTime() -
        new Date(b.node.frontmatter.date).getTime()
    )
    .reverse();

  return (
    <div>
      <PageMeta title="Jason Telfer - Web Developer" slug="/" />
      <Navbar />
      <div className="flex flex-col gap-3 px-5">
        {blogPosts.map((post: BlogPreviewQueryEdge, index: number) => (
          <BlogPreview post={post.node} index={index}/>
        ))}
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
