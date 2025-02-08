"use server";
import { CarRepository } from "../repositories"

export const getCarFiltersAction = async () => {
    return await CarRepository.getCarFilters()
}