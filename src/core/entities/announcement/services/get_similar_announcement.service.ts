import { validator } from "@/core/helpers/validator";
import fetchInstance from "@/core/lib/fetch.config";
import { RevalidateTagsEnum } from "@/data/enum/revalidate_tags.enum";
import { endpoints } from "@/data/utils/endpoints";
import { similarAnnouncementSchema } from "../schemas/dtoValidations/get_similar_announcement.schema";
import type { SimilarAnnouncementResDTO } from "../resDto/get_similar_announcement.dto";

export const getSimilarAnnouncementService = async (id: number) => {
    const res = await fetchInstance<SimilarAnnouncementResDTO>({
        endpoint: endpoints.announcement.getSimilarAnnouncement(id),
        config: {
            next: {
                tags: [RevalidateTagsEnum.GETSIMILARANNOUNCEMENT, String(id)],
            },
        },
    });
    if (res.isError) {
        return res;
    }
    return validator({
        schema: similarAnnouncementSchema,
        endpoint: endpoints.announcement.getSimilarAnnouncement(id),
        response: res.data,
    });
};
