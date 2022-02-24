import React from "react";
import { Box, Button, Heading, Link, Text, IconButton } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { Link as GatsbyLink } from "gatsby";

interface ProjectPreviewProps {
  frontmatter: Frontmatter;
}

interface Frontmatter {
  title: string;
  slug: string;
  description: string;
  github: string;
  demo: string;
}

export default function ProjectPreview({ frontmatter }: ProjectPreviewProps) {
  const { title, description, slug, github, demo }: Frontmatter = frontmatter;

  return (
    <Box>
      <Heading size="md">
        <Link as={GatsbyLink} to={slug}>
          {title}
        </Link>
      </Heading>
      <Text>{description}</Text>
      <Box display="flex" gap="1rem" mt="1rem">
        <Link as={GatsbyLink} href={demo} isExternal>
          Launch demo <ExternalLinkIcon mx="2px" />
        </Link>
        <Link as={GatsbyLink} href={github} isExternal>
          Github <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </Box>
  );
}
