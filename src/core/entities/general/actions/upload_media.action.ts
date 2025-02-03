"use server";
import { UploadMediaModel } from "../models/upload_media.model";
import { GeneralRepository } from "../repositories";

export const uploadMediaAction = async ({ data }: { data: UploadMediaModel }) => {
    return await GeneralRepository.UploadMedia(data);
}