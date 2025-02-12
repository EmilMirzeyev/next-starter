import { validator } from "@/core/helpers/validator"
import fetchInstance from "@/core/lib/fetch.config"
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum"
import { endpoints } from "@/data/utils/endpoints"
import { getAnnouncementByIdSchema } from "../schemas/dtoValidations/get_announcement_by_id.schema"
import type { GetAnnouncementByIdResDTO } from "../resDto/get_announcement_by_id.dto"

export const getAnnouncementByIdService = async (id: number) => {
    const res = await fetchInstance<GetAnnouncementByIdResDTO>({
        endpoint: endpoints.announcement.getAnnouncementById(id),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETANNOUNCEMENTBYID, String(id)]
            }
        }
    })
    if (res.isError) {
        return res
    }
    return validator({
        schema: getAnnouncementByIdSchema,
        endpoint: endpoints.announcement.getAnnouncementById(id),
        response: res.data
    })
}