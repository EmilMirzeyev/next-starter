import { z } from "zod";

const partnerSchema = z.object({
    url: z.string()
})

export const partnersSchema = z.object({
    data: z.array(partnerSchema)
})