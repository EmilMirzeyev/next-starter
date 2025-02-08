import type { BrandsModel } from "../models/get_brands.model";
import type { BrandsResDTO } from "../resDto/get_brands.dto";

export const getBrandsMapper = {
    resDtoToModel: (dto: BrandsResDTO): BrandsModel => {
        return {
            data: dto.data.map((brand) => ({
                id: brand.id,
                name: brand.name,
                logo: brand.logo,
            })),
        };
    },
};
