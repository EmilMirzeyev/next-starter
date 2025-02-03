import { getCarFiltersService } from "../services/get_car_filters.service";
import { CarRepositoryType } from "./car.repository.type";

export const CarRepository: CarRepositoryType = {
    async getCarFilters() {
        return await getCarFiltersService()
    },
}