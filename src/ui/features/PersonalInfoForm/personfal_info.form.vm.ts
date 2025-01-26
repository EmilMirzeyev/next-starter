import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";

export const PersonalInfoFormVM = () => {
    const router = useRouter();
    const methods = useForm({
        defaultValues: {
            userType: null,
            name: "",
            surname: "",
            whatsappNumber: "",
            phoneNumberList: [{ phoneNumber: "" }],
            day: null,
            month: null,
            year: null,
            address: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const { fields, append, remove } = useFieldArray({
        control: methods.control,
        name: "phoneNumberList",
    });

    const [userType, setUserType] = useState<number | null>(null);
    const [inputType, setInputType] = useState({
        password: "text",
        confirmPassword: "text",
    });

    const onSubmit = (data: any) => {
        console.log("data", data);
    };

    const onError = (error: FieldErrors<any>) => {
        console.error("error", error);
    };

    const appendPhoneNumber = () => {
        append({ phoneNumber: "" });
    };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
        setInputType((prev) => ({
            ...prev,
            [field]: prev[field] === "text" ? "password" : "text",
        }));
    };

    return {
        router,
        methods,
        userType,
        setUserType,
        inputType,
        setInputType,
        submitHandler,
        fields,
        append,
        remove,
        appendPhoneNumber,
        togglePasswordVisibility
    };
};
