"use server";

import PostRepository from "../repositories/PostRepository/post.repository";

export const deletePostAction = async ({ id }: { id: number }) => {
  const res = await PostRepository.deletePost(id);
  return res;
};
