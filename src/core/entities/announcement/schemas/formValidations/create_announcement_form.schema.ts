import { baseSelectSchema } from "@/core/entities/general/schemas/base_select.schema";
import { z } from "zod";

export const createAnnouncementSchema = z.object({
    brand: baseSelectSchema("Marka seçilməlidir"),
    banType: baseSelectSchema("Ban növü seçilməlidir"),
    year: baseSelectSchema("İl seçilməlidir"),
    price: baseSelectSchema("Qiymət daxil edilməlidir"),
    color: baseSelectSchema("Rəng seçilməlidir"),
    gear: baseSelectSchema("Ötürücü seçilməlidir"),
    capacity: baseSelectSchema("Həcm daxil edilməlidir"),
    mileage: z.string().min(1, "Yürüş daxil edilməlidir"),
    numberOfOwners: baseSelectSchema("Sahiblərinin sayı daxil edilməlidir"),
    marketType: baseSelectSchema("Bazar tipi seçilməlidir"),
    model: baseSelectSchema("Model seçilməlidir"),
    city: baseSelectSchema("Şəhər seçilməlidir"),
    status: baseSelectSchema("Vəziyyət seçilməlidir"),
    currency: baseSelectSchema("Valyuta seçilməlidir"),
    barter: z.boolean().optional(),
    credit: z.boolean().optional(),
    fuelType: baseSelectSchema("Yanacaq növü seçilməlidir"),
    gearbox: baseSelectSchema("Sürətlər qutusu seçilməlidir"),
    horsePower: z.string().min(1, "Güc daxil edilməlidir"),
    notRepainted: z.boolean().optional(),
    hasNoDamage: z.boolean().optional(),
    numberOfSeats: baseSelectSchema("Yerlərin sayı daxil edilməlidir"),
    onSale: z.boolean().optional(),
    byOrder: z.boolean().optional(),
    alloyWheels: z.boolean().optional(),
    abs: z.boolean().optional(),
    sunRoof: z.boolean().optional(),
    centralLockingSystem: z.boolean().optional(),
    xenonLamps: z.boolean().optional(),
    rainSensor: z.boolean().optional(),
    sideCurtains: z.boolean().optional(),
    leatherInterior: z.boolean().optional(),
    parkingRadar: z.boolean().optional(),
    rearCamera: z.boolean().optional(),
    seatVentilation: z.boolean().optional(),
    additionalInfo: z.string().optional(),
});

// Infer the TypeScript type
export type CreateAnnouncementSchema = z.infer<typeof createAnnouncementSchema>;
