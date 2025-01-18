import { z } from "zod";

export const signUpFormSchema = z.object({
    userType: z
        .number({ required_error: "User type is required!" })
        .nullable()
        .refine((val) => val, { message: "User type is required!" }),
    name: z.string().min(1, "Name is required!"),
    surname: z.string().min(1, "Surname is required!"),
    whatsappNumber: z.string().min(1, 'Whatsapp  number is required!'),
    phoneNumberList: z.array(
        z.object({
            phoneNumber: z.string().min(1, "Phone number is required!"),
        })
    ),
    day: z
        .number({ required_error: "Day is required!" })
        .nullable()
        .refine((val) => val, { message: "Day is required!" }),
    month: z
        .number({ required_error: "Month is required!" })
        .nullable()
        .refine((val) => val, { message: "Month is required!" }),
    year: z
        .number({ required_error: "Year is required!" })
        .nullable()
        .refine((val) => val, { message: "Year is required!" }),
    address: z.string().min(1, 'Address  number is required!'),
    email: z.string().min(1, 'Email is required!'),
    password: z.string().min(1, 'Password is required!'),
    confirmPassword: z.string().min(1, 'Confirm password is required!'),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirmPassword']
        });
    }
});