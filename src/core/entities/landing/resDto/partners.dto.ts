import { z } from "zod";
import { partnersSchema } from "../schemas/dtoValidations/partners.schema";

export type PartnersResDTO = z.infer<typeof partnersSchema>