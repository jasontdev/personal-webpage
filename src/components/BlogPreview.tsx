import React from "react";

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

type BlogPreviewProps = {
  post: BlogPreviewQueryNode;
  index: number;
};

function BlogPreview({ post, index }: BlogPreviewProps) {
  function renderTitleBox() {
    switch (index % 3) {
      case 0:
        return <div className="sm:w-1/2 text-white text-2xl flex justify-center items-center bg-red-500">{post.frontmatter.title}</div>;
      case 1:
        return <div className="sm:w-1/2 text-white text-2xl flex justify-center items-center bg-green-500">{post.frontmatter.title}</div>;
      case 2:
        return <div className="sm:w-1/2 text-white text-2xl flex justify-center items-center bg-blue-500">{post.frontmatter.title}</div>;
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-5">
      {renderTitleBox()}
      <div className="sm:w-1/2">{post.excerpt}</div>
    </div>
  );
}

export {
  BlogPreview,
  BlogPostMetadata,
  BlogPreviewQueryEdge,
  BlogPreviewQueryNode,
  BlogPreviewQueryFrontmatter,
};
