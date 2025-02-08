import { z } from "zod";
import { baseSchema } from "@/core/entities/general/schemas/base.schema";

export const modelsSchema = z.object({
    data: z.array(baseSchema)
})