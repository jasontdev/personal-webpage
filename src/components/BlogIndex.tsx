import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Link from "./Link";
import FriendlyDate from "./FriendlyDate";
import { BlogPostMetadata } from "../pages";

export default function BlogIndex({ posts }) {
  return (
    <Box>
      {posts.map((post: BlogPostMetadata) => (
        <Box>
          <Text as="b">
            <Link to={post.slug}>{post.title}</Link>
          </Text>
          <br />
          <Text as="i">
            <FriendlyDate date={new Date(post.date)} />
          </Text>
        </Box>
      ))}
    </Box>
  );
}
