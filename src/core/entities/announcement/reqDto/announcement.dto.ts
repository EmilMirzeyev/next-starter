export type AnnouncementReqDTO = {
    brand_id: number | null;
    model_id: number | null;
    body_type_id: number | null;
    city_id: number | null;
    year: number | null;
    vehicle_status: number | null;
    price: number | null;
    currency: number | null;
    credit: boolean;
    barter: boolean;
    color: number | null;
    fuel_type_id: number | null;
    drivetrain_id: number | null;
    gearbox_id: number | null;
    engine_size: number | null;
    engine_power: string;
    mileage: number | null;
    is_original_paint: boolean;
    has_no_damage: boolean;
    owner_count: number | null;
    seats_count: number | null;
    market: number | null;
    announcement_type_id: number | null;
    description: string;
}