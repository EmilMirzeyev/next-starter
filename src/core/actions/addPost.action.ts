"use server";

import { PostModel } from "@/data/model/post.model";
import PostRepository from "../repositories/PostRepository/post.repository";

export const addPostAction = async ({ data }: { data: PostModel }) => {
  const res = await PostRepository.addPost(data);
  return res;
};
