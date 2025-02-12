import { createAnnouncementMapper } from "../mappers/create_announcement.mapper";
import { getAnnouncementByIdMapper } from "../mappers/get_announcement_by_id.mapper";
import { getSimilarAnnouncementMapper } from "../mappers/get_similar_announcement.mapper";
import { createAnnouncementService } from "../services/create_announcement.service";
import { getAnnouncementByIdService } from "../services/get_announcement_by_id.service";
import { getSimilarAnnouncementService } from "../services/get_similar_announcement.service";
import { AnnouncementRepositoryType } from "./announcement.repository.type";
import { getAllAnnouncementService } from "./../services/get_all_annonucement.service";
import { getAllAnnouncementMapper } from "../mappers/get_all_announcement.mapper";

export const AnnouncementRepository: AnnouncementRepositoryType = {
    async createAnnouncement(data) {
        const mappedAnnouncementData = createAnnouncementMapper.modelToResDto(data);
        return await createAnnouncementService(mappedAnnouncementData);
    },
    async getAnnouncementById(id) {
        const announcement = await getAnnouncementByIdService(id);
        if (announcement.isError) {
            return announcement;
        }
        const mappedAnnouncementByIdData = getAnnouncementByIdMapper.resDtoToModel(
            announcement.data
        );
        return { isError: false, data: mappedAnnouncementByIdData };
    },
    async getSimilarAnnouncement(id) {
        const announcement = await getSimilarAnnouncementService(id);
        if (announcement.isError) {
            return announcement;
        }
        const mappedSimilarAnnouncementData =
            getSimilarAnnouncementMapper.resDtoToModel(announcement.data);
        return { isError: false, data: mappedSimilarAnnouncementData };
    },
    async getAllAnnouncement(query) {
        const allAnonuncement = await getAllAnnouncementService(query);
        if (allAnonuncement.isError) {
            return allAnonuncement;
        }
        const mappedAllAnnouncementData = getAllAnnouncementMapper.resDtoToModel(
            allAnonuncement.data
        );
        return { isError: false, data: mappedAllAnnouncementData };
    },
};
