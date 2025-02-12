import { SimilarAnnouncementModel } from "../models/get_similar_announcement.model";
import { SimilarAnnouncementResDTO } from "../resDto/get_similar_announcement.dto";

export const getSimilarAnnouncementMapper = {
    resDtoToModel: (dto: SimilarAnnouncementResDTO): SimilarAnnouncementModel => {
        return {
            data: dto.data.map((announcement) => ({
                id: announcement.id,
                created_at: announcement.created_at,
                brand: announcement.brand,
                model: announcement.model,
                credit: announcement.credit,
                barter: announcement.barter,
                price: announcement.price,
                currency: announcement.currency,
                year: announcement.year,
                engine_size: announcement.engine_size,
                mileage: announcement.mileage,
                images: announcement.images.map((img) => ({
                    media_id: img.media_id,
                    url: img.url,
                })),
            })),
        };
    },
};
