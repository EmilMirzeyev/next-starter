import type { BaseMediaModel } from "./base_media.model";

export type BaseVehicleModel = {
    id: number;
    brand: string;
    model: string;
    year: string;
    price: string;
    currency: string;
    credit: boolean;
    barter: boolean;
    engine_size: string;
    mileage: number;
    created_at: string;
    images: BaseMediaModel[];
}