import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { Title, Heading, SubHeading, Paragraph, Code } from "./typography";
import Link from "./Link";

export default function HtmlContent({ html }) {
  const htmlProcessor = unified()
    .use(rehypeParse)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        p: Paragraph,
        h1: Title,
        h2: Heading,
        h3: SubHeading,
        a: Link,
        code: Code,
      },
    });

  return <Box>{htmlProcessor.processSync(html).result}</Box>;
}
