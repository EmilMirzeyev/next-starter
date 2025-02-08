import { baseSchema } from "@/core/entities/general/schemas/base.schema";
import { z } from "zod";

const brandSchema = baseSchema.extend({
    logo: z.string(),
});

export const brandsSchema = z.object({
    data: z.array(brandSchema)
})
