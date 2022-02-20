import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Link from "./Link";
import FriendlyDate from "./FriendlyDate";

export default function BlogIndex({ entries }) {
  return (
    <Box>
      {entries.map(entry => (
        <Box>
          <Text as="b">
            <Link to={entry.slug}>{entry.title}</Link>
          </Text>
          <br />
          <Text as="i">
            <FriendlyDate date={new Date(entry.date)} />
          </Text>
        </Box>
      ))}
    </Box>
  );
}
