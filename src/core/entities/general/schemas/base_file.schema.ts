import { z } from "zod";

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ACCEPTED_IMAGE_TYPES = ["jpg", "jpeg", "png"];

const fileValidation = ({
    types,
    message,
    formatMessage,
}: {
    types: string[];
    message: string;
    formatMessage?: string;
}) =>
    z
        .any()
        .refine((file) => file?.name?.length > 0, message)
        .refine(
            (file) =>
                types.includes(file.type) || types.includes(file.name.split(".").pop()),
            formatMessage
        )
        .refine((file) => file.size <= MAX_FILE_SIZE, {
            message: `Maks. fayl ölçüsü: 5MB olmalıdır !`,
        });

export const imageSchema = fileValidation({
    types: ACCEPTED_IMAGE_TYPES,
    message: "Fayl tələb olunur!",
    formatMessage: `Qəbul edilən fayl formatları: "${ACCEPTED_IMAGE_TYPES.join(
        '", "'
    )}"!`,
});

const fileListValidation = ({
    schema,
    message,
    idealCount
}: {
    schema: z.ZodType<any>;
    message: string;
    idealCount: number
}) =>
    z
        .array(schema)
        .min(1, message)
        .superRefine((files, ctx) => {
            const fileNames = files.map((file) => file.name);
            fileNames.forEach((name, idx) => {
                if (fileNames.indexOf(name) !== idx) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "Bu şəkil artıq mövcuddur !",
                        path: [idx],
                    });
                }
                if (files.length < idealCount) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: `${idealCount} şəkil əlavə etməlisiniz.`,
                        path: [],
                    });
                } else if (files.length > idealCount) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: `Şəkil sayı ${idealCount}'dən çox olmamalıdır.`,
                        path: [],
                    });
                }
            });
        });

export const baseImageListSchema = ({
    message = "Ən azı bir fayl əlavə etməlisiniz.",
    idealCount = 1
}: {
    message?: string;
    idealCount?: number
}) =>
    fileListValidation({
        schema: imageSchema,
        message,
        idealCount
    });
