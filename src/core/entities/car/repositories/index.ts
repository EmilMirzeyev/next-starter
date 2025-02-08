import { getBrandsMapper } from "../mappers/get_brands.mapper";
import { getModelsMapper } from "../mappers/get_models.mapper";
import { getBrandsService } from "../services/get_brands.service";
import { getCarFiltersService } from "../services/get_car_filters.service";
import { getModelsService } from "../services/get_models.service";
import { CarRepositoryType } from "./car.repository.type";

export const CarRepository: CarRepositoryType = {
    async getCarFilters() {
        const carFiltersData = await getCarFiltersService()
        if (carFiltersData.isError) {
            return carFiltersData
        }
        return { isError: false, data: carFiltersData }
    },
    async getBrands() {
        const brands = await getBrandsService()
        if (brands.isError) {
            return brands
        }
        const mappedBrandsData = getBrandsMapper.resDtoToModel(brands.data)
        return { isError: false, data: mappedBrandsData };
    },
    async getModels(id) {
        const models = await getModelsService(id)
        if (models.isError) {
            return models
        }
        const mappedModelsData = getModelsMapper.resDtoToModel(models.data)
        return { isError: false, data: mappedModelsData }
    }
}