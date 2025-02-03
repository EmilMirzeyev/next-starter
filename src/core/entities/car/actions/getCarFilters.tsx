"use server";
import { CarRepository } from "../repositories"

export const getCarFilters = async () => {
    return await CarRepository.getCarFilters()
}