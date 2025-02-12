import { z } from "zod";
import { similarAnnouncementSchema } from "../schemas/dtoValidations/get_similar_announcement.schema";

export type SimilarAnnouncementResDTO = z.infer<
    typeof similarAnnouncementSchema
>;
