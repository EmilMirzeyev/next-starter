import { baseImageListSchema } from "@/core/entities/general/schemas/base_file.schema";
import { z } from "zod";

export const signUpFormSchema = z
    .object({
        role: z
            .number({ required_error: "İstifadəçi tipi tələb olunur!" })
            .nullable()
            .refine((val) => val, { message: "İstifadəçi tipi tələb olunur!" }),
        first_name: z.string().min(1, "Ad tələb olunur!"),
        last_name: z.string().min(1, "Soyad tələb olunur!"),
        whatsapp_number: z.string().min(1, "Whatsapp nömrəsi tələb olunur!"),
        phone_numbers: z.array(
            z.object({
                phone_number: z.string().min(1, "Telefon nömrəsi tələb olunur!"),
            })
        ),
        day: z
            .object({
                id: z.number(),
                name: z.string(),
            })
            .nullable()
            .refine((val) => val, { message: "Gün tələb olunur!" }),
        month: z
            .object({
                id: z.number(),
                name: z.string(),
            })
            .nullable()
            .refine((val) => val, { message: "Ay tələb olunur!" }),
        year: z
            .object({
                id: z.number(),
                name: z.string(),
            })
            .nullable()
            .refine((val) => val, { message: "İl tələb olunur!" }),
        address: z.string().min(1, "Ünvan tələb olunur!"),
        identity_images: baseImageListSchema({ message: "ŞV-nin arxa və qabaq şəkilləri tələb olunur!", idealCount: 2 }),
        profile_image: baseImageListSchema({ message: "Profil şəkli tələb olunur!" }),
        email: z
            .string()
            .min(1, "E-poçt tələb olunur!")
            .email("Yanlış e-poçt formatı!"),
        password: z
            .string()
            .min(1, "Şifrə tələb olunur!")
            .min(6, "Şifrə ən azı 6 simvoldan ibarət olmalıdır!"),
        password_confirmation: z
            .string()
            .min(1, "Şifrənin təkrarı tələb olunur!")
            .min(6, "Şifrə ən azı 6 simvoldan ibarət olmalıdır!"),
    })
    .superRefine(({ password_confirmation, password }, ctx) => {
        if (password_confirmation !== password) {
            ctx.addIssue({
                code: "custom",
                message: "Şifrələr uyğun gəlmir!",
                path: ["password_confirmation"],
            });
        }
    });
