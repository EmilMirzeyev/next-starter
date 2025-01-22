"use client";
import { FieldErrors, useForm } from "react-hook-form"

type CreateAnnouncementFormModel = {

}

export const CreateAnnouncementFormVM = () => {
    const methods = useForm<CreateAnnouncementFormModel>()

    const onSubmit = (data: CreateAnnouncementFormModel) => {
        console.log('data', data)
    }

    const onError = (error: FieldErrors<CreateAnnouncementFormModel>) => {
        console.error('error', error);
    }

    const submitHandler = methods.handleSubmit(onSubmit, onError)

    return { methods, submitHandler }
}
