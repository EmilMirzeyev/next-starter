import { UploadMediaMapper } from "../mappers/upload_media.mapper";
import { uploadMediaService } from "../services/upload_media.service";
import { GeneralRepositoryType } from "./general.repository.type";

export const GeneralRepository: GeneralRepositoryType = {
    async UploadMedia(data) {
        const mappedUploadMediaData = UploadMediaMapper.modelToReqDto(data);
        return await uploadMediaService(mappedUploadMediaData);
    },
};
