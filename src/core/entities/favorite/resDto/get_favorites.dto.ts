import { z } from "zod";
import { favoritesSchema } from "../schemas/dtoValidations/get_favorites.shcema";

export type FavoritesResDTO = z.infer<typeof favoritesSchema>