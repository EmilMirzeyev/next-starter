"use server";
import { AnnouncementRepository } from "../repositories";

export const getSimilarAnnouncementAction = async (id: number) => {
    return await AnnouncementRepository.getSimilarAnnouncement(id)
}