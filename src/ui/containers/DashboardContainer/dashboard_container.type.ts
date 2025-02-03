import type { CarFiltersModel } from "@/core/entities/car/models/get_car_filters.model"

export type DashboardContainerType = {
    carFilters: { data: CarFiltersModel }
}