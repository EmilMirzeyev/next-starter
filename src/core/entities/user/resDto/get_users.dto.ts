import { z } from "zod";
import { userSchema } from "../schemas/resDtoValidations/get_users.schema";

export type UsersRestDTO = z.infer<typeof userSchema>