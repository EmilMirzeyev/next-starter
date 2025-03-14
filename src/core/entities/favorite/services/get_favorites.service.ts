import { validator } from "@/core/helpers/validator"
import fetchInstance from "@/core/lib/fetch.config"
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum"
import { endpoints } from "@/data/utils/endpoints"
import type { FavoritesResDTO } from "../resDto/get_favorites.dto"
import { favoritesSchema } from "../schemas/dtoValidations/get_favorites.shcema"

export const getFavoritesService = async () => {
    const res = await fetchInstance<FavoritesResDTO>({
        endpoint: endpoints.favorites.getFavorites(),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETFAVORITES]
            }
        }
    })
    if (res.isError) {
        return res
    }
    return validator({
        schema: favoritesSchema,
        endpoint: endpoints.favorites.getFavorites(),
        response: res.data
    })
}