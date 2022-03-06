import React from "react";
import { Link } from "gatsby";

interface ProjectPreviewProps {
  frontmatter: Frontmatter;
}

interface Frontmatter {
  title: string;
  slug: string;
  description: string;
  github: string;
  demo: string;
}

export default function ProjectPreview({ frontmatter }: ProjectPreviewProps) {
  const { title, description, slug, github, demo }: Frontmatter = frontmatter;

  return (
    <div>
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <p>{description}</p>
      <div className="project-preview-links">
        <Link href={demo}>🚀 Launch demo</Link>
        <Link href={github}>🤖 Github</Link>
      </div>
    </div>
  );
}
