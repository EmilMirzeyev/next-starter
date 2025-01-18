import { Res } from "@/data/types/res.type";
import type { GetUsersModel, GetUserModel } from "../models/get_users.model";
import { CreateUserModel } from "../models/create_user.model";

export type UserRepositoryType = {
    getUsers(query: string): Promise<Res<GetUsersModel>>;
    getUserById(id: string): Promise<Res<GetUserModel>>;
    createUser(data: CreateUserModel): Promise<Res<unknown>>;
    deleteUser(id: number): Promise<Res<unknown>>
};
