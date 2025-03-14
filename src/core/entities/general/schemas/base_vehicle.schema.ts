import { z } from "zod";
import { baseMediaSchema } from "./base_media.schema";

export const baseVehicleSchema = z.object({
    id: z.number(),
    brand: z.string(),
    model: z.string(),
    year: z.string(),
    price: z.string(),
    currency: z.string(),
    credit: z.boolean(),
    barter: z.boolean(),
    engine_size: z.string(),
    mileage: z.number(),
    created_at: z.string(),
    images: z.array(baseMediaSchema)
})