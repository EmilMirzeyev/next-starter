import { z } from "zod";

export const contactUsFormSchema = z.object({
    fullName: z.string().min(1, "Ad və soyad daxil edilməlidir"),
    phoneNumber: z.string().min(1, 'Telefon nömrəsi daxil edilməlidir'),
    email: z.string().min(1, 'E-poçt ünvanı daxil edilməlidir'),
    message: z.string().min(1, 'Mesaj daxil edilməlidir')
})