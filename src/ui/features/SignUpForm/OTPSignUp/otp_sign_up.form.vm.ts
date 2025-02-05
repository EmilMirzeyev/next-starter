import { useState } from "react";
import { useCountdown } from "react-countdown-circle-timer";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/core/hooks/useRedux";
import { setSignUpStep } from "@/core/store/auth";
import { SignUpStepsEnum } from "@/data/enum/sign_up_steps.enum";

export const OTPSignUpFormVM = () => {
    const dispatch = useAppDispatch()
    const [otp, setOtp] = useState("");
    const [key, setKey] = useState(0);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const isOtpComplete = otp.length === 6;
    const methods = useForm();


    const onSubmit = (data: any) => {
        console.log('data', data);
        setSuccessModalVisible(true)
        methods.reset();
    };
    const onError = () => { };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    const { remainingTime } = useCountdown({
        duration: 5,
        colors: "#abc",
    });


    const formatTime = (remainingTime: number) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds
            }`;
    };

    const handleRetry = () => {
        setKey((prevKey) => prevKey + 1);
        console.log("retry");
        setOtp("")
    };

    const successModalAction = () => {
        dispatch(setSignUpStep(SignUpStepsEnum.SIGNUP))
    }


    return {
        methods,
        submitHandler,
        isOtpComplete,
        otp,
        setOtp,
        key,
        setKey,
        successModalVisible,
        setSuccessModalVisible,
        remainingTime,
        formatTime,
        handleRetry,
        successModalAction
    };
};
