import { Res } from "@/data/types/res.type"
import type { FavoritesModel } from "../models/get_favorites.model"

export type FavoriteRepositoryType = {
    getFavorites(): Promise<Res<FavoritesModel>>
}