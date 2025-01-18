import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

export const NewPasswordVM = () => {
    const [successModalVisible, setSuccessModalVisible] = useState(false)
    const [inputType, setInputType] = useState({
        password: "text",
        confirmPassword: "text",
    });
    const methods = useForm<any>();
    const onSubmit = (data: any) => {
        console.log("data", data);
        setSuccessModalVisible(true)
        methods.reset();
    };

    const onError = (error: FieldErrors<any>) => {
        console.error("validation error", error);
    };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
        setInputType((prev) => ({
            ...prev,
            [field]: prev[field] === "text" ? "password" : "text",
        }));
    };

    return {
        inputType,
        successModalVisible,
        setSuccessModalVisible,
        methods,
        submitHandler,
        togglePasswordVisibility,
    };
};
