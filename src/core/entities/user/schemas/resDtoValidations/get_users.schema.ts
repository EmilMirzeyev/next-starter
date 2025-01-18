import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string(),
    address: z.object({
        street: z.string(),
        city: z.string(),
    }),
})

export const usersSchema = z.array(userSchema)
