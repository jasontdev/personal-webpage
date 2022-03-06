import React from "react";
import { Helmet } from "react-helmet";

interface PageMetaProps {
  title: string;
  slug: string;
  description?: string;
}

export default function PageMeta({ title, slug, description }: PageMetaProps) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="canonical" href={`https://jasont.dev${slug}`} />
    </Helmet>
  );
}
