import fetchInstance from "@/core/lib/fetch.config"
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum"
import { endpoints } from "@/data/utils/endpoints"
import type { CarFiltersResDTO } from "../resDto/get_car_filters.dto"
import { validator } from "@/core/helpers/validator"
import { carFiltersSchema } from "../schemas/formValidations/get_car_filters.schema"

export const getCarFiltersService = async () => {
    const res = await fetchInstance<CarFiltersResDTO>({
        endpoint: endpoints.car.getCarFilters(),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETCARFILTERS]
            }
        }
    })
    if (res.isError) {
        return res
    }
    return validator({
        schema: carFiltersSchema,
        endpoint: endpoints.car.getCarFilters(),
        response: res.data
    })
}