import { Res } from "@/data/types/res.type"
import type { CarFiltersModel } from "../models/get_car_filters.model"

export type CarRepositoryType = {
    getCarFilters(): Promise<Res<CarFiltersModel>>
}