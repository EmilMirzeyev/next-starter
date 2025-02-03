import { Res } from "@/data/types/res.type";
import { UploadMediaModel } from "../models/upload_media.model";
import { UploadMediaResDTO } from "../resDto/upload_media.dto";

export type GeneralRepositoryType = {
    UploadMedia: (data: UploadMediaModel) => Promise<Res<UploadMediaResDTO>>;
}