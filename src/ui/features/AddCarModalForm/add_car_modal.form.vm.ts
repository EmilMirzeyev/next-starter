import { baseSelectSchema } from '@/core/entities/general/schemas/base_select.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm } from 'react-hook-form'
import { z } from 'zod';

type AddCarModalFormModel = {
    brand: number | null;
    model: number | null;
    minYear: number | null;
    maxYear: number | null;
    city: number | null;
}

const addCarModalFormSchema = z.object({
    brand: baseSelectSchema("Marka seçilməlidir"),
    model: baseSelectSchema("Model seçilməlidir"),
    minYear: baseSelectSchema("Min il seçilməlidir"),
    maxYear: baseSelectSchema("Max il seçilməlidir"),
    city: baseSelectSchema("Şəhər seçilməlidir"),
})

export const AddCarModalFormVM = () => {
    const methods = useForm<AddCarModalFormModel>({
        resolver: zodResolver(addCarModalFormSchema),
        defaultValues: {
            brand: null,
            model: null,
            minYear: null,
            maxYear: null,
            city: null,
        }
    })

    const onSubmit = (data: AddCarModalFormModel) => {
        console.log('data', data)
    }

    const onError = (error: FieldErrors<AddCarModalFormModel>) => {
        console.error('error', error);
    }

    const submitHandler = methods.handleSubmit(onSubmit, onError)

    return { methods, submitHandler }
}
