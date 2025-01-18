import { z } from "zod";
import { userSchema } from "../schemas/resDtoValidations/get_users.schema";

export type UserRestDTO = z.infer<typeof userSchema>