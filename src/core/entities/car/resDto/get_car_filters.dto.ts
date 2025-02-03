import { z } from "zod";
import { carFiltersSchema } from "../schemas/formValidations/get_car_filters.schema";

export type CarFiltersResDTO = z.infer<typeof carFiltersSchema>