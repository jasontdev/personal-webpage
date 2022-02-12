import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function Intro() {
  return (
    <Box mt={3}>
      <Text>Hi, I'm Jason, web developer from Brisbane, Australia.</Text>
      <Text>
        I enjoy creating fast, responsive and accessible app experiences using
        the React and Node ecosystems.
      </Text>
      <Box display="flex" justifyContent="center">
        <Button>Learn more</Button>
      </Box>
    </Box>
  );
}
