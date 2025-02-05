import fetchInstance from "@/core/lib/fetch.config";
import { AnnouncementReqDTO } from "../reqDto/announcement.dto";
import { endpoints } from "@/data/utils/endpoints";

export const createAnnouncementService = async (body: AnnouncementReqDTO) => {
    const res = await fetchInstance<unknown>({
        endpoint: endpoints.announcement.createAnnouncement(),
        config: {
            method: "POST"
        },
        data: body
    })
    if (res.isError) {
        return res
    }
    return res
}