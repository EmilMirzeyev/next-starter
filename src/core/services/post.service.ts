import fetchInstance from "../lib/fetch.config";
import { endpoints } from "@/data/utils/endpoints";
import { validator } from "../helpers/validator";
import { postSchema, postsSchema } from "../schemas/dtoValidations/posts.schema";
import { type PostDTO } from "@/data/dto/post.dto";
import { PostDSO } from "@/data/dso/post.dso";

export const getPostsService = async (query: string) => {
  const res = await fetchInstance<PostDTO[]>({
    endpoint: endpoints.posts(query),
  });

  if (res.isError) {
    return res;
  }

  return validator({
    endpoint: endpoints.posts(query),
    schema: postsSchema,
    response: res.data,
  });
};

//If we don't need response model we can only use just 'return: res' without condition
export const addPostService = async (body: PostDSO) => {
  const res = await fetchInstance<unknown>({
    endpoint: endpoints.posts(),
    config: { method: "POST" },
    data: body,
  });

  if (res.isError) {
    return res;
  }

  return res;
};

export const deletePostService = async (id: number) => {
  const res = await fetchInstance<unknown>({
    endpoint: endpoints.post(id),
    config: { method: "DELETE" },
  });

  if (res.isError) {
    return res;
  }

  return res;
};

export const getPostByIdService = async (id: number) => {
  const res = await fetchInstance<PostDTO>({
    endpoint: endpoints.post(id)
  });

  if (res.isError) {
    return res;
  }

  return validator({
    endpoint: endpoints.post(id),
    schema: postSchema,
    response: res.data,
  });
};
