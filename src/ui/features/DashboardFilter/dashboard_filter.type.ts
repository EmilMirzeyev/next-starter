import { BrandsModel } from "@/core/entities/car/models/get_brands.model"
import type { CarFiltersModel } from "@/core/entities/car/models/get_car_filters.model"

export type DashboardFilterType = {
    brands: { data: BrandsModel  | null}
    carFilters: { data: CarFiltersModel | null }
}