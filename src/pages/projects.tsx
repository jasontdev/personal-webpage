import { Box, Heading, Text } from "@chakra-ui/react";
import { graphql, navigate } from "gatsby";
import React from "react";
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
    <Box>
      <Heading size="lg" mb="1rem">
        Projects
      </Heading>
      <Box display="flex" flexDirection="column" gap="2rem">
        {renderProjectPreviews(projects)}
      </Box>
    </Box>
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
