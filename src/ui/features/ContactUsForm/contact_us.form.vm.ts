import type { ContactUsFormModel } from "@/core/entities/contact/models/contact_us_form.model";
import { contactUsFormSchema } from "@/core/entities/contact/schemas/formValidations/contact_us_form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form"

export const ContactUsFormVM = () => {
    const methods = useForm<ContactUsFormModel>({
        resolver: zodResolver(contactUsFormSchema)
    })

    const onSubmit = (data: ContactUsFormModel) => {
        console.log('data', data)
    }

    const onError = (error: FieldErrors<ContactUsFormModel>) => {
        console.error('error', error);
    }

    const submitHandler = methods.handleSubmit(onSubmit, onError)

    return { methods, submitHandler }
}
