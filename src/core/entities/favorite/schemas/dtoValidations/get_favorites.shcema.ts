import { z } from "zod";
import { baseVehicleSchema } from "@/core/entities/general/schemas/base_vehicle.schema";

export const favoritesSchema = z.object({
    data: z.array(baseVehicleSchema),
});
