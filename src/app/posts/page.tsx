import PostRepository from "@/core/repositories/PostRepository/post.repository";
import ClientToast from "@/ui/shared/ClientToast";
import PostList from "@/ui/containers/PostList";
import React from "react";
import { Metadata } from "next";
import { meta } from "@/data/utils/meta";

export const metadata: Metadata = {
  title: "Posts",
};

const Posts = async () => {
  const { data, error, isError } = await PostRepository.getPosts("?_limit=20");

  return (
    <div className="container">
      {isError && <ClientToast error={error} />}
      <PostList posts={data || []} />
    </div>
  );
};

export default Posts;
