"use server";
import { CarRepository } from "../repositories";

export const getBrandsActions = async () => {
    return await CarRepository.getBrands()
}