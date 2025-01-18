"use server";
import { UserRepository } from "../repositories";

export const deleteUserAction = async ({ id }: { id: number }) => {
    return await UserRepository.deleteUser(id);
};
