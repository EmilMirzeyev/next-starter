import { FavoritesModel } from "../models/get_favorites.model";
import { FavoritesResDTO } from "../resDto/get_favorites.dto";

export const getFavoritesMapper = {
    resDtoToModel: (dto: FavoritesResDTO): FavoritesModel => {
        return {
            data: dto.data.map((favorite) => ({
                id: favorite.id,
                brand: favorite.brand,
                model: favorite.model,
                year: favorite.year,
                price: favorite.price,
                currency: favorite.currency,
                credit: favorite.credit,
                barter: favorite.barter,
                engine_size: favorite.engine_size,
                mileage: favorite.mileage,
                created_at: favorite.created_at,
                images: favorite.images.map((image) => ({
                    media_id: image.media_id,
                    url: image.url
                }))
            }))
        }
    }
}