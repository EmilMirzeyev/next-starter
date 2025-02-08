import { createAnnouncementMapper } from "../mappers/create_announcement.mapper";
import { createAnnouncementService } from "../services/create_announcement.service";
import { AnnouncementRepositoryType } from "./announcement.repository.type";

export const AnnouncementRepository: AnnouncementRepositoryType = {
    async createAnnouncement(data) {
        const mappedAnnouncementData = createAnnouncementMapper.modelToResDto(data)
        return await createAnnouncementService(mappedAnnouncementData)
    },
}