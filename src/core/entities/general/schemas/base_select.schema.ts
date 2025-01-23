import { z } from "zod";

export const baseSelectSchema = (message = "Field is required") =>
    z
        .number()
        .nullable()
        .refine((val) => val, { message });
