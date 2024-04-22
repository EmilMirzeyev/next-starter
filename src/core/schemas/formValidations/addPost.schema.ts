import { z } from "zod";

export const addPostSchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(1, "Title field is required")
    .min(5, "Min 5 characters"),
  description: z
    .string()
    .min(1, "Title field is required")
    .min(5, "Min 5 characters"),
  isRead: z.number(),
});
