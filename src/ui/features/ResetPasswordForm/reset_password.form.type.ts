import { ResetPasswordEnum } from "@/data/enum/reset_password.enum"

export type ResetPasswordFormType = {
    resetPasswordStep: ResetPasswordEnum;
    setResetPasswordStep: (password: ResetPasswordEnum) => void;
}
