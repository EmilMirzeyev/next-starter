import { z } from "zod";
import { baseMediaSchema } from "@/core/entities/general/schemas/base_media.schema";

export const announcementSchema = z.object({
    id: z.number(),
    created_at: z.string(),
    brand: z.string(),
    model: z.string(),
    credit: z.boolean(),
    barter: z.boolean(),
    price: z.string(),
    currency: z.string(),
    year: z.string(),
    engine_size: z.string(),
    mileage: z.number(),
    images: z.array(baseMediaSchema),
});

export const similarAnnouncementSchema = z.object({
    data: z.array(announcementSchema),
});
