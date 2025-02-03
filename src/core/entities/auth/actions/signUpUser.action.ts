"use server";
import { SignUpModel } from "../models/sign_up.model";
import { AuthRepository } from "../repositories";

export const signUpUserAction = async ({ data }: { data: SignUpModel }) => {
    return await AuthRepository.signUpUser(data);
};
