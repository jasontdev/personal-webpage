import React from "react";
import {
  Heading as ChakraHeading,
  Text,
  Code as ChakraCode,
  Box,
} from "@chakra-ui/react";

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

function Code({ children }) {
  return (
    <ChakraCode
      padding={4}
      borderRadius={8}
      mb="1rem"
      variant="subtle"
      width="100%"
    >
      {children}
    </ChakraCode>
  );
}
export { Title, Heading, SubHeading, Paragraph, Code };
