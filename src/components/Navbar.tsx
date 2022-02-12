import React from "react";
import { Box, Heading } from "@chakra-ui/react";

import Link from "./Link";

export default function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Heading size="md">
          <Link to="/">jasont.dev</Link>
        </Heading>
      </Box>
      <Box display="flex" alignItems="center" gap="1rem">
        <Link to="/about">about</Link>
        <Link to="/blog">blog</Link>
        <Link to="/projects">projects</Link>
      </Box>
    </Box>
  );
}
