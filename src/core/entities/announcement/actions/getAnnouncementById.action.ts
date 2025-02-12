"use server";
import { AnnouncementRepository } from "../repositories";

export const getAnnouncementByIdAction = async (id: number) => {
    return AnnouncementRepository.getAnnouncementById(id)
}