import fetchInstance from "@/core/lib/fetch.config"
import { endpoints } from "@/data/utils/endpoints"
import type { UsersRestDTO } from "../resDto/get_users.dto"
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum"
import { validator } from "@/core/helpers/validator"
import { usersSchema } from "../schemas/resDtoValidations/get_users.schema"

export const getUsersService = async (query: string) => {
    const res = await fetchInstance<UsersRestDTO>({
        endpoint: endpoints.user.getUsers(query),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETUSERS]
            }
        }
    })
    if (res.isError) {
        return res;
    }
    console.log('res', res)
    return validator({
        endpoint: endpoints.user.getUsers(query),
        schema: usersSchema,
        response: res.data
    })
}