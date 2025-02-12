import { validator } from "@/core/helpers/validator";
import fetchInstance from "@/core/lib/fetch.config";
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum";
import { endpoints } from "@/data/utils/endpoints";
import { allAnnouncementSchema } from "../schemas/dtoValidations/get_all_announcement.schema";
import type { AllAnnouncementResDTO } from "../resDto/get_all_announcement.dto";

export const getAllAnnouncementService = async (query: string) => {
    const res = await fetchInstance<AllAnnouncementResDTO>({
        endpoint: endpoints.announcement.getAllAnnouncement(query),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETALLANNOUNCEMENT],
            },
        },
    });
    if (res.isError) {
        return res;
    }
    return validator({
        schema: allAnnouncementSchema,
        endpoint: endpoints.announcement.getAllAnnouncement(query),
        response: res.data,
    });
};
