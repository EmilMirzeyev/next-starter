import { BaseMediaModel } from "@/core/entities/general/models/base_media.model";

export type AnnouncementModel = {
    id: number;
    created_at: string;
    brand: string;
    model: string;
    credit: boolean;
    barter: boolean;
    price: string;
    currency: string;
    year: string;
    engine_size: string;
    mileage: number;
    images: BaseMediaModel[];
};

export type SimilarAnnouncementModel = {
    data: AnnouncementModel[]
}
