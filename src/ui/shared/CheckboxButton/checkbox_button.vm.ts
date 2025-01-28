import { type FieldValues, useFormContext, UseFormReturn } from "react-hook-form"
import { CheckboxButtonVMType } from "./checkbox_button.type"
import { useEffect, useState } from "react"

export const CheckboxButtonVM = ({ name, onChange }: CheckboxButtonVMType) => {
    const methods: UseFormReturn<FieldValues, any, undefined> = useFormContext()
    // const hasMethods = methods && methods.formState
    // const mainValue = hasMethods ? methods.getValues(name) : value;
    const [innerValue, setInnerValue] = useState(false);

    const handleCheck = (val: boolean) => {
        console.log('val checkbox', val)
        if (methods) {
            methods.setValue(name, val)
            methods.trigger(name)
        }
        setInnerValue(val)
        onChange?.(val)
    }

    useEffect(() => {
        const formValue = methods.getValues(name);
        setInnerValue(!!formValue);
      }, [methods, name])

    return { innerValue, handleCheck }
}
