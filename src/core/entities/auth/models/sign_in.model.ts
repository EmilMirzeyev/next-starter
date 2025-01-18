import { z } from "zod";
import { signInFormSchema } from '@/core/entities/auth/schemas/formValidations/sgin_in_form.schema';

export type SignInModel = z.infer<typeof signInFormSchema>