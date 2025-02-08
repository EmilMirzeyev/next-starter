import { z } from "zod";
import { modelsSchema } from "../schemas/dtoValidations/models.schema";

export type ModelsResDTO = z.infer<typeof modelsSchema>