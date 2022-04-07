import React from "react";
import { Link } from "gatsby";
import FriendlyDate from "./FriendlyDate";
import { BlogPostMetadata } from "../pages";

export default function BlogIndex({ posts }) {
  return (
    <div>
      {posts.map((post: BlogPostMetadata) => (
        <div>
          <div className="blog-index-item">
            <Link className="blog-index-item-link" to={post.slug}>
              {post.title}
            </Link>
            <FriendlyDate
              className="blog-index-item-date"
              date={new Date(post.date)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
