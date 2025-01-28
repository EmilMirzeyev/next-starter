import { SignUpModel } from "@/core/entities/auth/models/sign_up.model";
import { signUpFormSchema } from "@/core/entities/auth/schemas/formValidations/sign_up_form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch } from "@/core/hooks/useRedux";
import { SignUpStepsEnum } from "@/data/enum/sign_up_steps.enum";
import { setSignUpStep } from "@/core/store/auth/sign_steps.slice";

export const SignUpFormVM = () => {
    const [userType, setUserType] = useState<number | null>(null);
    const [inputType, setInputType] = useState({
        password: "text",
        confirmPassword: "text",
    });
    const dispatch = useAppDispatch()

    const methods = useForm<SignUpModel>({
        resolver: zodResolver(signUpFormSchema),
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

    const onSubmit = (data: SignUpModel) => {
        console.log("data", data);
        dispatch(setSignUpStep(SignUpStepsEnum.OTP))
        methods.reset();
    };

    const onError = (error: FieldErrors<SignUpModel>) => {
        console.error("validation error", error);
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
        methods,
        submitHandler,
        fields,
        appendPhoneNumber,
        remove,
        userType,
        setUserType,
        inputType,
        togglePasswordVisibility,
    };
};
