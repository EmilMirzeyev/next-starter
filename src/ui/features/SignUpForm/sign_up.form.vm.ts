import { SignUpModel } from "@/core/entities/auth/models/sign_up.model";
import { signUpFormSchema } from "@/core/entities/auth/schemas/formValidations/sign_up_form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/core/hooks/useRedux";
import { SignUpStepsEnum } from "@/data/enum/sign_up_steps.enum";
import { setSignUpStep } from "@/core/store/auth";
import { signUpUserAction } from "@/core/entities/auth/actions/signUpUser.action";
import { snackbar } from "@/ui/shared/Sanckbar";

export const SignUpFormVM = () => {
    const signUpStore = useAppSelector((store) => store.media.signup)
    console.log('signUpStore', signUpStore)
    const [userType, setUserType] = useState<number | null>(null);
    const [inputType, setInputType] = useState({
        password: "text",
        password_confirmation: "text",
    });
    const dispatch = useAppDispatch()
    const [isPending, startTransition] = useTransition();

    const methods = useForm<SignUpModel>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            role: null,
            first_name: "",
            last_name: "",
            whatsapp_number: "",
            phone_numbers: [{ phone_number: "" }],
            day: null,
            month: null,
            year: null,
            address: "",
            email: "",
            password: "",
            password_confirmation: "",
            identity_images: [],
            profile_image: [],
            profile_media_id: null,
            id_card_media_ids: [],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control: methods.control,
        name: "phone_numbers",
    });

    const onSubmit = (data: SignUpModel) => {
        console.log("data test", data);
        // const signUpData = {
        //     ...data,
        //     ...signUpStore
        // }
        console.log('methods.getValues', methods.getValues('profile_media_id'))
        const signUpData = {
            ...data,
            profile_media_id: methods.getValues('profile_media_id'),
            id_card_media_ids: methods.getValues('id_card_media_ids')
        }
        startTransition(async () => {
            const res = await signUpUserAction({ data: signUpData })
            if (res.isError) {
                snackbar("error", res.error.message);
                console.log('error', res);
            } else {
                dispatch(setSignUpStep(SignUpStepsEnum.OTP))
                methods.reset();
                snackbar("success", "Post uğurla əlavə edildi!");
            }
        })

    };

    const onError = (error: FieldErrors<SignUpModel>) => {
        console.error("validation error", error);
    };

    const appendPhoneNumber = () => {
        append({ phone_number: "" });
    };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    const togglePasswordVisibility = (field: "password" | "password_confirmation") => {
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
        isPending
    };
};
