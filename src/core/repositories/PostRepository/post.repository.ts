import { postMigration } from "@/data/migration/post.migration";
import { PostRespositoryType } from "./post_repository.type";
import { addPostService, deletePostService, getPostByIdService, getPostsService } from "@/core/services/post.service";
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
  async getPostById(id) {
    const post = await getPostByIdService(id);
    if (post.isError) {
      return post;
    }
    const migratedPost = postMigration.dtoToModel(post.data);
    return Object.assign(post, {data: migratedPost});
  },
};

export default PostRepository;
