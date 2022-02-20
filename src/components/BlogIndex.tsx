import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Link from "./Link";

export default function BlogIndex({ entries }) {
  return (
    <Box>
      {entries.map(entry => (
        <Text as="b">
          <Link to={entry.slug}>{entry.title}</Link> - {entry.date}
        </Text>
      ))}
    </Box>
  );
}
