import fetchInstance from "@/core/lib/fetch.config";
import { UserRestDTO } from "../resDto/get_user_by_id.dto";
import { endpoints } from "@/data/utils/endpoints";
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum";
import { validator } from "@/core/helpers/validator";
import { userSchema } from "../schemas/resDtoValidations/get_users.schema";

export const getUserByIdService = async (id: string) => {
    const res = await fetchInstance<UserRestDTO>({
        endpoint: endpoints.user.getUserById(id),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETUSERBYID, id],
            },
        },
    });
    if (res.isError) {
        return res;
    }

    return validator({
        endpoint: endpoints.user.getUserById(id),
        schema: userSchema,
        response: res.data,
    });
};
