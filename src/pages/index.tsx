import React from "react";
import { graphql, navigate } from "gatsby";
import BlogPreview from "../components/BlogPreview";
import PageMeta from "../components/PageMeta";

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
      <div>
        <p>Hi, I'm Jason Telfer, web developer from Brisbane, Australia.</p>
      </div>
      <div>
        <div>
          <button onClick={() => navigate("/about")}>Learn more</button>
        </div>
      </div>
      <div>
        <div>
          {blogPosts.map(blog => 
            <BlogPreview
              title={blog.node.frontmatter.title}
              date={blog.node.frontmatter.date}
              excerpt={blog.node.excerpt}
              slug={blog.node.frontmatter.slug}
            />
          )}
        </div>
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
