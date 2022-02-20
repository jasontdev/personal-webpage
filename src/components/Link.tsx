import React from "react";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

interface LinkPropType {
  to?: string;
  href?: string;
  children?: React.ReactNode;
}

export default function Link({ to, href, children }: LinkPropType) {
  if (to) {
    return (
      <ChakraLink as={GatsbyLink} to={to}>
        {children}
      </ChakraLink>
    );
  } else {
    return <ChakraLink href={href}>{children}</ChakraLink>;
  }
}
