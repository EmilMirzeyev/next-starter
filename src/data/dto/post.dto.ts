import { postSchema } from "@/core/schemas/dtoValidations/posts.schema";
import { z } from "zod";

export type PostDTO = z.infer<typeof postSchema>