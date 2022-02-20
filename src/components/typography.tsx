import React from "react";
import { Heading as ChakraHeading, Text } from "@chakra-ui/react";

function Title({ children }) {
  return <ChakraHeading size="lg">{children}</ChakraHeading>;
}

function Heading({ children }) {
  return <ChakraHeading size="md">{children}</ChakraHeading>;
}

function SubHeading({ children }) {
  return <ChakraHeading size="sm">{children}</ChakraHeading>;
}

function Paragraph({ children }) {
  return <Text mb="1rem">{children}</Text>;
}

export { Title, Heading, SubHeading, Paragraph };
