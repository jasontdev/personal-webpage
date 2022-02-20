import React from "react";
import { Box, Button, Text, Heading } from "@chakra-ui/react";
import Link from "./Link";
import FriendlyDate from "./FriendlyDate";

export default function BlogPreview({ excerpt, title, date, slug }) {
  return (
    <Box>
      <Link to={slug}>
        <Heading size="lg">{title}</Heading>
      </Link>
      <Text as="i">
        <FriendlyDate date={new Date(date)} />
      </Text>
      <Text>{excerpt}</Text>
    </Box>
  );
}
