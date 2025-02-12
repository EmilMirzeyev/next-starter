import { z } from "zod";

const phoneNumberSchema = z.object({
    phone_number: z.string(),
});

const profilePictureSchema = z.object({
    media_id: z.number(),
    url: z.string().url(),
});

const userSchema = z.object({
    id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    whatsapp_number: z.string(),
    phone_numbers: z.array(phoneNumberSchema),
    profile_picture: profilePictureSchema,
});

const carDataSchema = z.object({
    id: z.number(),
    user: userSchema,
    brand: z.string(),
    model: z.string(),
    body_type: z.number(),
    city: z.string(),
    year: z.string(),
    vehicle_status: z.number(),
    price: z.string(),
    currency: z.string(),
    credit: z.boolean(),
    barter: z.boolean(),
    color: z.string().nullable(),
    fuel_type: z.number(),
    drivetrain: z.number(),
    gearbox: z.number(),
    engine_size: z.string(),
    engine_power: z.number(),
    mileage: z.number(),
    is_original_paint: z.boolean(),
    has_no_damage: z.boolean(),
    owner_count: z.number(),
    seats_count: z.number(),
    market: z.string().nullable(),
    user_id: z.number(),
    announcement_type: z.string().nullable(),
    description: z.string(),
    created_at: z.string(),
    images: z.array(profilePictureSchema),
    car_features: z.array(z.string()),
});

export const getAnnouncementByIdSchema = z.object({
    data: carDataSchema,
});
