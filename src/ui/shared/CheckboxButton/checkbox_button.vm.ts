import { type FieldValues, useFormContext, UseFormReturn } from "react-hook-form"
import { CheckboxButtonVMType } from "./checkbox_button.type"

export const CheckboxButtonVM = ({ name, onChange }: CheckboxButtonVMType) => {
    const methods: UseFormReturn<FieldValues, any, undefined> = useFormContext()
    // const hasMethods = methods && methods.formState
    // const mainValue = hasMethods ? methods.getValues(name) : value;

    const handleCheck = (val: boolean) => {
        console.log('val checkbox', val)
        if (methods) {
            methods.setValue(name, val)
            methods.trigger(name)
        }
        onChange?.(val)
    }

    return { handleCheck }
}
