import React from "react";
import { Box, Button, Text, Heading } from "@chakra-ui/react";
import Link from "./Link";

export default function BlogPreview({
  excerpt,
  title,
  description,
  date,
  slug,
}) {
  return (
    <Box>
      <Link to={slug}>
        <Heading size="lg">{title}</Heading>
      </Link>
      <Heading size="sm">{date}</Heading>
      <Text as="i">{description}</Text>
      <Text>{excerpt}</Text>
    </Box>
  );
}
