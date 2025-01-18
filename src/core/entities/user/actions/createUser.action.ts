"use server";
import { CreateUserModel } from "../models/create_user.model";
import { UserRepository } from "../repositories";

export const createUserAction = async ({ data }: { data: CreateUserModel }) => {
    return await UserRepository.createUser(data);
};
