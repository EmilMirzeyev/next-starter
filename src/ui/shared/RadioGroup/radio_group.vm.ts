"use client";
import { ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";
import { RadioGroupType } from "./radio_group.type";

export const RadioGroupVM = <
    T extends { id: number; disabled?: boolean; render: ReactNode },
>({
    data,
    name,
    value,
    onChange,
}: Pick<RadioGroupType<T>, "data" | "name" | "value" | "onChange">) => {
    const methods = useFormContext();
    const hasMethods = methods && methods.formState;
    const mainValue = hasMethods ? methods.getValues(name) : value;

    const initialValue = (val: T | null | number | undefined) => {
        if (val === undefined || val === null) {
            return null;
        }
        if (typeof val === "number") {
            const valueId = data.find((d) => d.id === val)?.id;
            return valueId ? { id: valueId } : null;
        }
        return val;
    };
    const [innerValue, setInnerValue] = useState(() => initialValue(mainValue));

    const clickOnSelected = () => {
        setInnerValue(null);
        onChange?.(null);
    };

    const handleSelect = async (val: T): Promise<void> => {
        if (methods) {
            methods.setValue(name, val.id);
            await methods.trigger(name);
        }
        setInnerValue(val);
        onChange?.(val);
    };

    return { innerValue, handleSelect, clickOnSelected };
};
