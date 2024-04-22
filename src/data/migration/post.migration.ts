import { type PostDTO } from "@/data/dto/post.dto";
import { type PostModel } from "@/data/model/post.model";

export const postMigration = {
  dtoToModel: (dto: PostDTO): PostModel => {

    return {
      id: dto.id,
      title: dto.title,
      description: dto.body,
      isRead: 0,
    };
  },
};
