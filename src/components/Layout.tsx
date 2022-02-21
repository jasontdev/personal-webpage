import React from "react";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Box width="100vw" display="flex" justifyContent="center">
      <Box width={["100%", 650]} padding="1rem">
        <Navbar />
        <Box mt={3}>{children}</Box>
      </Box>
    </Box>
  );
}
