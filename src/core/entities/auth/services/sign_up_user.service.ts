import fetchInstance from "@/core/lib/fetch.config";
import type { SignUpUserReqDTO } from "../reqDto/sign_up_user.dto";
import { endpoints } from "@/data/utils/endpoints";

export const signUpUserService = async (body: SignUpUserReqDTO) => {
    console.log('body', body)
    const res = await fetchInstance<unknown>({
        endpoint: endpoints.auth.signUpUser(),
        config: {
            method: "POST",
        },
        data: body,
    });
    if (res.isError) {
        return res;
    }
    return res;
};
