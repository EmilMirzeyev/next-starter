import { useDebounce } from "@/core/hooks/useDebounce";
import { useUpdateEffect } from "@/core/hooks/useUpdateEffect";
import { ChangeEvent, useState } from "react";
import { FieldValues, UseFormReturn, useFormContext } from "react-hook-form";

type Props = {
    name: string;
    type?: string;
    isDebounce: boolean;
    onDebounce?: (value: string) => void;
    onChange?: (value: string) => void;
};

export const TextareaVM = ({
    name,
    // type,
    isDebounce,
    onDebounce,
    onChange,
}: Props) => {
    const methods: UseFormReturn<FieldValues, any, undefined> = useFormContext();
    const [innerValue, setInnerValue] = useState<string | null>(null);
    const [dirty, setDirty] = useState(false);
    const debouncedValue = useDebounce<string>(innerValue!, 500);
    const reg = methods ? { ...methods.register?.(name) } : undefined;
    const hasMethods = methods && methods.formState;

    useUpdateEffect(() => {
        if (dirty && isDebounce) {
            onDebounce?.(innerValue!);
        }
    }, [debouncedValue]);


    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (isDebounce) {
            setInnerValue(e.target.value);
        }
        if (!dirty) {
            setDirty(true);
        }
        onChange?.(e.target.value);
    };

    return {
        reg,
        hasMethods,
        methods,
        changeHandler,
    };
};
