"use server";
import { UserRepository } from "../repositories";

export const getUsersAction = async (query: string = '') => {
    return await UserRepository.getUsers(query)
}