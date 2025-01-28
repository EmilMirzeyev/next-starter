import { ResetPasswordEnum } from "@/data/enum/reset_password.enum";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ResetPasswordFormType } from "../reset_password.form.type";

export const OTPConfirmVM = ({ setResetPasswordStep }: Pick<ResetPasswordFormType, 'setResetPasswordStep'>) => {
    const [key, setKey] = useState(0);
    const [otp, setOtp] = useState("");
    const isOtpComplete = otp.length === 6;

    const methods = useForm();

    const onSubmit = (data: any) => {
        setResetPasswordStep(ResetPasswordEnum.NEWPASSWORD)
        console.log('data', data)
    };
    const onError = () => { };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    const formatTime = (remainingTime: number) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const handleRetry = () => {
        setKey((prevKey) => prevKey + 1);
        console.log("retry");
    };


    return {
        methods,
        submitHandler,
        isOtpComplete,
        key,
        setKey,
        formatTime,
        handleRetry,
        otp,
        setOtp
    };
};
