import { BaseModel } from "@/core/entities/general/models/base.model";

type BrandModel = BaseModel & {
    logo: string;
};

export type BrandsModel = {
    data: BrandModel[];
};
