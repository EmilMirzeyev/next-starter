import { getFavoritesMapper } from "../mappers/get_favorites.mapper";
import { getFavoritesService } from "../services/get_favorites.service";
import type { FavoriteRepositoryType } from "./favorite.repository.type";

export const FavoriteRepository: FavoriteRepositoryType = {
    async getFavorites() {
        const favorites = await getFavoritesService()
        if (favorites.isError) {
            return favorites
        }
        const mappedFavorites = getFavoritesMapper.resDtoToModel(favorites.data)
        return { isError: false, data: mappedFavorites }
    },
}