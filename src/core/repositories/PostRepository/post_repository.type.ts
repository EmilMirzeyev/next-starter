import { type PostModel } from "@/data/model/post.model";
import { Res } from "@/data/types/res.type";

export type PostRespositoryType = {
  getPosts(query: string): Promise<Res<PostModel[]>>;
  addPost(post: PostModel): Promise<Res<unknown>>;
  deletePost(id: number): Promise<Res<unknown>>;
  getPostById(id: number): Promise<Res<PostModel>>;
};
