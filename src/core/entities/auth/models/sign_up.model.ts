import { z } from "zod";
import { signUpFormSchema } from "../schemas/formValidations/sign_up_form.schema";

export type SignUpModel = z.infer<typeof signUpFormSchema>