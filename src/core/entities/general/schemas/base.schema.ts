import { z } from "zod";

export const baseSchema = z.object({
    id: z.number(),
    name: z.string()
})