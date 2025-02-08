import { Res } from "@/data/types/res.type"
import type { CarFiltersModel } from "../models/get_car_filters.model"
import type { BrandsModel } from "../models/get_brands.model";
import type { ModelsModel } from "../models/get_models.model";

export type CarRepositoryType = {
    getCarFilters(): Promise<Res<CarFiltersModel>>;
    getBrands(): Promise<Res<BrandsModel>>;
    getModels(id: number): Promise<Res<ModelsModel>>
}