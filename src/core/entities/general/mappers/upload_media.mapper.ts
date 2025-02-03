import { UploadMediaModel } from "../models/upload_media.model";
import { UploadMediaReqDTO } from "../reqDto/upload_media.dto";

export const UploadMediaMapper = {
    modelToReqDto: (model: UploadMediaModel): UploadMediaReqDTO => {
        const formData = new FormData();
        model.files.forEach((file) => {
            formData.append('file', file);
        })
        return formData
    }
}