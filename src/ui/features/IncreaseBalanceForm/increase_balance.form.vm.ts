import { FieldErrors, useForm } from "react-hook-form"

export const IncreaseBalanceFormVM = () => {
    const methods = useForm<any>()

    const onSubmit = (data: any) => {
        console.log('data', data);
    }

    const onError = (error: FieldErrors<any>) => {
        console.error('error', error);
    }

    const submitHandler = methods.handleSubmit(onSubmit, onError)

    return { methods, submitHandler }
}
