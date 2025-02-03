import fetchInstance from "@/core/lib/fetch.config";
import { endpoints } from "@/data/utils/endpoints";
import type { UserReqDTO } from "../reqDto/create_user.req_dto";

export const createUserService = async (body: UserReqDTO) => {
    const res = await fetchInstance<unknown>({
        endpoint: endpoints.user.createUser(),
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
