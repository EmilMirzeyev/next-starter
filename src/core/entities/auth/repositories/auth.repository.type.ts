import { Res } from "@/data/types/res.type"
import type { SignUpModel } from "../models/sign_up.model"

export type AuthRepositoryType = {
    signUpUser(data: SignUpModel): Promise<Res<unknown>>
}