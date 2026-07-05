import React from "react";
import BlogList from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Sovereign Lending",
  description: "Expert perspectives on Australian lending, property investment, and refinancing.",
};

export default function Blog() {
  const posts = getAllPosts();
  
  return (
    <>
      <BlogList initialPosts={posts} />
    </>
  );
}
