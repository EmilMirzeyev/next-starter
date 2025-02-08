"use server";
import { CarRepository } from "../repositories";

export const getModelsAction = async (id: number) => {
    return await CarRepository.getModels(id)
}