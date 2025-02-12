import { z } from "zod";
import { getAnnouncementByIdSchema } from "../schemas/dtoValidations/get_announcement_by_id.schema";

export type GetAnnouncementByIdResDTO = z.infer<
    typeof getAnnouncementByIdSchema
>;
