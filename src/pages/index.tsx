import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Intro from "../components/Intro";
import BlogPreview from "../components/BlogPreview";

export default function Home() {
  return (
    <Box>
      <Intro />
      <Heading size="md">Latest post</Heading>
      <BlogPreview />
    </Box>
  );
}
