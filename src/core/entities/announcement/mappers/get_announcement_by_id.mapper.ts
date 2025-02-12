import type { GetAnnouncementByIdModel } from "../models/get_announcement_by_id.model";
import type { GetAnnouncementByIdResDTO } from "../resDto/get_announcement_by_id.dto";

export const getAnnouncementByIdMapper = {
    resDtoToModel: (
        dto: GetAnnouncementByIdResDTO
    ): GetAnnouncementByIdModel => {
        return {
            data: {
                id: dto.data.id,
                user: {
                    id: dto.data.user.id,
                    first_name: dto.data.user.first_name,
                    last_name: dto.data.user.last_name,
                    whatsapp_number: dto.data.user.whatsapp_number,
                    phone_numbers: dto.data.user.phone_numbers.map((item) => ({
                        phone_number: item.phone_number
                    })),
                    profile_picture: {
                        media_id: dto.data.user.profile_picture.media_id,
                        url: dto.data.user.profile_picture.url
                    }
                },
                brand: dto.data.brand,
                model: dto.data.model,
                body_type: dto.data.body_type,
                city: dto.data.city,
                year: dto.data.year,
                vehicle_status: dto.data.vehicle_status,
                price: dto.data.price,
                currency: dto.data.currency,
                credit: dto.data.credit,
                barter: dto.data.barter,
                color: dto.data.color,
                fuel_type: dto.data.fuel_type,
                drivetrain: dto.data.drivetrain,
                gearbox: dto.data.gearbox,
                engine_size: dto.data.engine_size,
                engine_power: dto.data.engine_power,
                mileage: dto.data.mileage,
                is_original_paint: dto.data.is_original_paint,
                has_no_damage: dto.data.has_no_damage,
                owner_count: dto.data.owner_count,
                seats_count: dto.data.seats_count,
                market: dto.data.market,
                user_id: dto.data.user_id,
                announcement_type: dto.data.announcement_type,
                description: dto.data.description,
                created_at: dto.data.created_at,
                images: dto.data.images.map((image) => ({
                    media_id: image.media_id,
                    url: image.url,
                })),
                car_features: dto.data.car_features
            }
        }
    },
};
