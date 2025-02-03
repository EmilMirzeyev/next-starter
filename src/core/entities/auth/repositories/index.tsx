import { SignUpMapper } from "../mappers/sign_up.mapper";
import { signUpUserService } from "../services/sign_up_user.service";
import type { AuthRepositoryType } from "./auth.repository.type";

export const AuthRepository: AuthRepositoryType = {
    async signUpUser(data) {
        const mappedSignUpData = SignUpMapper.modelToReqDto(data)
        console.log('mappedSignUpData', mappedSignUpData)
        return await signUpUserService(mappedSignUpData);
    },
}