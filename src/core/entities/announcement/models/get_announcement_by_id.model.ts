import { BaseMediaModel } from "@/core/entities/general/models/base_media.model";

type UserModel = {
    id: number;
    first_name: string;
    last_name: string;
    whatsapp_number: string;
    phone_numbers: PhoneNumberModel[];
    profile_picture: BaseMediaModel;
};

type PhoneNumberModel = {
    phone_number: string;
};

type CarDataModel = {
    id: number;
    user: UserModel;
    brand: string;
    model: string;
    body_type: number;
    city: string;
    year: string;
    vehicle_status: number;
    price: string;
    currency: string;
    credit: boolean;
    barter: boolean;
    color: string | null;
    fuel_type: number;
    drivetrain: number;
    gearbox: number;
    engine_size: string;
    engine_power: number;
    mileage: number;
    is_original_paint: boolean;
    has_no_damage: boolean;
    owner_count: number;
    seats_count: number;
    market: string | null;
    user_id: number;
    announcement_type: string | null;
    description: string;
    created_at: string;
    images: BaseMediaModel[];
    car_features: string[];
};

export type GetAnnouncementByIdModel = {
    data: CarDataModel;
};
