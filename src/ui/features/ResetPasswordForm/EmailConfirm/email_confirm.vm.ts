import { ResetPasswordEnum } from "@/data/enum/reset_password.enum"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const EmailConfirmVM = ({ setResetPasswordStep }) => {
    const [emailValue, setEmailValue] = useState("")

    const methods = useForm<any>()

    const onSubmit = (data: any) => {
        setResetPasswordStep(ResetPasswordEnum.OTPCONFIRM)
        console.log('data', data)
    }

    const onError = (error: any) => {
        console.error('error', error);
    }

    const submitHandler = methods.handleSubmit(onSubmit, onError)

    return { emailValue, setEmailValue, methods, submitHandler }
}
