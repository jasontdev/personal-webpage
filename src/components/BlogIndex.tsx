import React from "react";
import { Link } from "gatsby";
import FriendlyDate from "./FriendlyDate";
import { BlogPostMetadata } from "../pages";

export default function BlogIndex({ posts }) {
  return (
    <div>
      {posts.map((post: BlogPostMetadata) => (
        <div>
          <p>
            <Link to={post.slug}>{post.title}</Link>
          </p>
          <br />
          <p>
            <FriendlyDate date={new Date(post.date)} />
          </p>
        </div>
      ))}
    </div>
  );
}
