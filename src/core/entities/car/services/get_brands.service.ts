import fetchInstance from "@/core/lib/fetch.config";
import { BrandsResDTO } from "../resDto/get_brands.dto";
import { endpoints } from "@/data/utils/endpoints";
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum";
import { validator } from "@/core/helpers/validator";
import { brandsSchema } from "../schemas/dtoValidations/brands.schema";

export const getBrandsService = async () => {
    const res = await fetchInstance<BrandsResDTO>({
        endpoint: endpoints.car.getBrands(),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETBRANDS],
            },
        },
    });
    if (res.isError) {
        return res;
    }

    return validator({
        schema: brandsSchema,
        endpoint: endpoints.car.getBrands(),
        response: res.data
    });
};
