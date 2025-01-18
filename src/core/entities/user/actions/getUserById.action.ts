import { UserRepository } from "../repositories"

export const getUserByIdAction = async (id: string) => {
    return await UserRepository.getUserById(id)
}