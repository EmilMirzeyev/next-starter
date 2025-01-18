import fetchInstance from "@/core/lib/fetch.config"
import { endpoints } from "@/data/utils/endpoints"

export const deleteUserService = async (id: number) => {
    const res = await fetchInstance<unknown>({
        endpoint: endpoints.user.deleteUser(id),
        config: {
            method: 'DELETE'
        }
    })
    if (res.isError) {
        return res
    }
    return res
}