import React from "react";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

export default function Link({ to, children }) {
  return (
    <ChakraLink as={GatsbyLink} to={to}>
      {children}
    </ChakraLink>
  );
}
