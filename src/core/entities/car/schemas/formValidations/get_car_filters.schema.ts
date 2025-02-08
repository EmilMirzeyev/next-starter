import { z } from "zod";
import { baseSchema } from "@/core/entities/general/schemas/base.schema";

export const carFiltersSchema = z.record(
    z.enum(["gearboxes", "body_types", "fuel_types", "markets", "features"]),
    z.array(baseSchema)
)