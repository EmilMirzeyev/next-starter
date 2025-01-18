import { useForm } from "react-hook-form"

export const DashboardFilterVM = () => {
    const methods = useForm<any>()

    const onSubmit = (data: any) => {
        console.log('data', data)
    }

    const onError = (error: any) => {
        console.error('error', error);
    }

    const submitHandler = methods.handleSubmit(onSubmit, onError)

    return { methods, submitHandler }
}
