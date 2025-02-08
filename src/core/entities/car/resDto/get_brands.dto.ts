import { z } from "zod";
import { brandsSchema } from "../schemas/dtoValidations/brands.schema";

export type BrandsResDTO = z.infer<typeof brandsSchema>