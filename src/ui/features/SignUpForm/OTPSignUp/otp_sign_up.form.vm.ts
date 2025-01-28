import { useState } from "react";
import { useForm } from "react-hook-form";

export const OTPSignUpFormVM = () => {
    const [otp, setOtp] = useState("");
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const isOtpComplete = otp.length === 6;

    const methods = useForm();

    const onSubmit = (data: any) => {
        setSuccessModalVisible(true)
        console.log('data', data)
    };
    const onError = () => { };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    return {
        methods,
        submitHandler,
        isOtpComplete,
        otp,
        setOtp,
        successModalVisible,
        setSuccessModalVisible,
    };
};
