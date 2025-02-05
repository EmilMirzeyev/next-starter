import type { AnnouncementModel } from "../models/announcement.model";
import type { AnnouncementReqDTO } from "../reqDto/announcement.dto";

export const CreateAnnouncementMapper = {
    modelToResDto: (model: AnnouncementModel): AnnouncementReqDTO => {
        return {
            brand_id: model.brand,
            model_id: model.model,
            body_type_id: model.banType,
            city_id: model.city,
            year: model.year,
            vehicle_status: model.status,
            price: model.price,
            currency: model.currency,
            credit: model.credit,
            barter: model.barter,
            color: model.color,
            fuel_type_id: model.fuelType,
            drivetrain_id: model.gear,
            gearbox_id: model.gearbox,
            engine_size: model.capacity,
            engine_power: model.horsePower,
            mileage: model.mileage,
            is_original_paint: model.notRepainted,
            has_no_damage: model.hasNoDamage,
            owner_count: model.numberOfOwners,
            seats_count: model.numberOfSeats,
            market: model.marketType,
            // ! make it dynamic
            announcement_type_id: 1,
            description: model.additionalInfo
        }
    }
}