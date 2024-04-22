import { type PostModel } from "@/data/model/post.model";
import { Res } from "@/data/types/res.type";

export type PostRespositoryType = {
  getPosts(query: string): Promise<Res<PostModel[]>>;
  addPost(post: PostModel): Promise<Res<unknown>>;
  deletePost(id: number): Promise<Res<unknown>>;
  //   getPost(id: number): Promise<PostModel>;
};
