import { z } from "zod";

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ACCEPTED_IMAGE_TYPES = ["jpg", "jpeg", "png"];

const fileValidation = (acceptedTypes: string[]) =>
    z.object({
        name: z.string().min(1, "Maşının ən azı bir şəklini əlavə etməlisiniz. 1"),
        type: z.string(),
        size: z.number().max(MAX_FILE_SIZE, "Maks. fayl ölçüsü: 5MB olmalıdır"),
    }).refine(
        (file) => acceptedTypes.includes(file.type) || acceptedTypes.includes(file.name.split(".").pop() || ""),
        { message: 'Qəbul edilən fayl formatları: "jpg", "jpeg" və "png"' }
    );

export const imageSchema = fileValidation(ACCEPTED_IMAGE_TYPES);

export const baseImageListSchema = z
    .array(imageSchema)
    .min(1, "Maşının ən azı bir şəklini əlavə etməlisiniz. 2")
    .refine(
        (files) => new Set(files.map((file) => file.name)).size === files.length,
        { message: "Bu fayl artıq mövcuddur" }
    );
