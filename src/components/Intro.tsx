import React from "react";
import { Box } from "@chakra-ui/react";
import { Paragraph } from "../components/typography";

export default function Intro() {
  return (
    <Box mt={3}>
      <Paragraph>
        Hi, I'm Jason, web developer from Brisbane, Australia.
      </Paragraph>
      <Paragraph>
        I enjoy creating fast, responsive and accessible app experiences using
        the React and Node ecosystems.
      </Paragraph>
    </Box>
  );
}
