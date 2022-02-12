import React, { useEffect, useState } from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { Box, Text, Heading as ChakraHeading } from "@chakra-ui/react";
import Link from "./Link";

function Title({ children }) {
  return <ChakraHeading size="lg">{children}</ChakraHeading>;
}

function Heading({ children }) {
  return <ChakraHeading size="md">{children}</ChakraHeading>;
}

function SubHeading({ children }) {
  return <ChakraHeading size="sm">{children}</ChakraHeading>;
}
export default function HtmlContent({ html }) {
  const htmlProcessor = unified()
    .use(rehypeParse)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        p: Text,
        h1: Title,
        h2: Heading,
        h3: SubHeading,
      },
    });

  return <Box>{htmlProcessor.processSync(html).result}</Box>;
}
