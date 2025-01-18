"use client";
import { useState } from "react"
import OTPConfirm from "./OTPConfirm"
import EmailConfirm from "./EmailConfirm"
import { ResetPasswordEnum } from "@/data/enum/reset_password.enum";
import NewPassword from "./NewPassword";


const ResetPasswordForm = () => {
  const [resetPasswordStep, setResetPasswordStep] = useState(ResetPasswordEnum.EMAILCONFIRM)

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