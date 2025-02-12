"use server";
import { AnnouncementRepository } from "../repositories";

export const getAllAnnouncement = async (query: string = "") => {
    return await AnnouncementRepository.getAllAnnouncement(query);
};
