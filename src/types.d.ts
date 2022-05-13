type BlogPostMetadata = {
  title: string;
  slug: string;
  date: string;
};

type BlogPreviewQueryEdge = {
  node: BlogPreviewQueryNode;
};

type BlogPreviewQueryNode = {
  excerpt: string;
  frontmatter: BlogPreviewQueryFrontmatter;
};

type BlogPreviewQueryFrontmatter = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

export {
  BlogPostMetadata,
  BlogPreviewQueryEdge,
  BlogPreviewQueryNode,
  BlogPreviewQueryFrontmatter,
};
