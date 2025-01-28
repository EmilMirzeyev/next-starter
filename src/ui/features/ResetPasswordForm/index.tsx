"use client";
import OTPConfirm from "./OTPConfirm"
import EmailConfirm from "./EmailConfirm"
import { ResetPasswordEnum } from "@/data/enum/reset_password.enum";
import NewPassword from "./NewPassword";
import { ResetPasswordFormType } from "./reset_password.form.type";

const ResetPasswordForm = ({ resetPasswordStep, setResetPasswordStep }: ResetPasswordFormType) => {

  const renderResetPasswordStep = {
    [ResetPasswordEnum.EMAILCONFIRM]: <EmailConfirm setResetPasswordStep={setResetPasswordStep} />,
    [ResetPasswordEnum.OTPCONFIRM]: <OTPConfirm setResetPasswordStep={setResetPasswordStep} />,
    [ResetPasswordEnum.NEWPASSWORD]: <NewPassword />,
  }

  return (
    <div>
      {renderResetPasswordStep[resetPasswordStep as ResetPasswordEnum]}
    </div>
  )
}

export default ResetPasswordForm