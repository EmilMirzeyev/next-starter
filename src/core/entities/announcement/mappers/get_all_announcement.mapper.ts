import type { AllAnnouncementModel } from "../models/get_all_announcement.model";
import type { AllAnnouncementResDTO } from "../resDto/get_all_announcement.dto";

export const getAllAnnouncementMapper = {
    resDtoToModel: (dto: AllAnnouncementResDTO): AllAnnouncementModel => {
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
            links: {
                first: dto.links.first,
                last: dto.links.last,
                prev: dto.links.prev,
                next: dto.links.next,
            },
            meta: {
                current_page: dto.meta.current_page,
                from: dto.meta.from,
                last_page: dto.meta.last_page,
                links: dto.meta.links.map((link) => ({
                    url: link.url,
                    active: link.active,
                    label: link.label,
                })),
                path: dto.meta.path,
                per_page: dto.meta.per_page,
                to: dto.meta.to,
                total: dto.meta.total,
            },
        };
    },
};
