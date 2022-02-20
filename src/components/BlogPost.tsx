import { Text, Box } from "@chakra-ui/react";
import React from "react";
import { SubHeading, Title } from "./typography";
import HtmlContent from "./HtmlContent";

export default function BlogPost({ title, date, description, html }) {
  return (
    <Box>
      <HtmlContent html={html} />
    </Box>
  );
}
