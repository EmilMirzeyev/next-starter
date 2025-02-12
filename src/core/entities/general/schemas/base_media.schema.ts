import { z } from "zod";

export const baseMediaSchema = z.object({
    media_id: z.number(),
    url: z.string().url(),
});