"use server";
import type { AnnouncementModel } from "../models/announcement.model";
import { AnnouncementRepository } from "../repositories";

export const createAnnouncementAction = async ({
    data,
}: {
    data: AnnouncementModel;
}) => {
    return await AnnouncementRepository.createAnnouncement(data);
};
