import React from "react";
import { graphql, navigate } from "gatsby";
import ProjectPreview from "../components/ProjectPreview";

export default function Projects({ data }) {
  function renderProjectPreviews(projects): React.ReactNodeArray {
    if (projects.length > 0) {
      return projects.map(project => (
        <ProjectPreview frontmatter={project.node.frontmatter} />
      ));
    }

    return null;
  }

  const projects = data.allMarkdownRemark.edges;
  return (
    <div>
      <h3>Projects</h3>
      <div>{renderProjectPreviews(projects)}</div>
    </div>
  );
}

export const projectPageQuery = graphql`
  query ProjectPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "project" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            github
            demo
          }
        }
      }
    }
  }
`;
