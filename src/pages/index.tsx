import React from "react";
import { graphql, navigate } from "gatsby";
import BlogPreview from "../components/BlogPreview";
import BlogIndex from "../components/BlogIndex";
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
  const blogPosts = data.allMarkdownRemark.edges;
  const mostRecent = blogPosts
    .sort(
      (a: Edge, b: Edge) =>
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
        <h3>Latest post</h3>
        <div>
          <BlogPreview
            title={mostRecent.frontmatter.title}
            date={mostRecent.frontmatter.date}
            excerpt={mostRecent.excerpt}
            slug={mostRecent.frontmatter.slug}
          />
          <div>
            <button onClick={() => navigate(mostRecent.frontmatter.slug)}>
              Read more
            </button>
          </div>
          {posts.length > 1 ? (
            <div>
              <h3>Older posts</h3>
              <BlogIndex posts={posts.slice(1)} />
            </div>
          ) : (
            <div></div>
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
