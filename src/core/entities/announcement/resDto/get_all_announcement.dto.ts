import { z } from "zod";
import { allAnnouncementSchema } from "../schemas/dtoValidations/get_all_announcement.schema";

export type AllAnnouncementResDTO = z.infer<typeof allAnnouncementSchema>;
