import { postMigration } from "@/data/migration/post.migration";
import { PostRespositoryType } from "./post_repository.type";
import { addPostService, deletePostService, getPostsService } from "@/core/services/post.service";
import { PostDSO } from "@/data/dso/post.dso";

const PostRepository: PostRespositoryType = {
  async getPosts(query) {
    const posts = await getPostsService(query);
    if (posts.isError) {
      return posts;
    }
    const migratedPosts = posts.data.map(postMigration.dtoToModel);
    return Object.assign(posts, {data: migratedPosts});
  },
  async addPost(post) {
    return await addPostService(post as PostDSO);
  },
  async deletePost(id) {
    return await deletePostService(id);
  },
  // async getPost(id) {
  //   const post = await getPostService(id);
  //   const migratedPost = postMigration.dtoToModel(post);
  //   return migratedPost;
  // },
};

export default PostRepository;
