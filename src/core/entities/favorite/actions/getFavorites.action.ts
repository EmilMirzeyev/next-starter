"use server"
import { FavoriteRepository } from "../repositories"

export const getFavorites = async () => {
    return await FavoriteRepository.getFavorites()
}