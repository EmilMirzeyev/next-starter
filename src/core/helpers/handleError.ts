import type { FieldValues, UseFormReturn } from "react-hook-form";

export const handleError = (
    key: string,
    methods: UseFormReturn<FieldValues, any, undefined>,
    type: boolean = false
): string => {
    const keys = key.split(".");
    let result: Record<string, any> = methods.formState.errors;
    for (const k of keys) {
        if (result && Object.prototype.hasOwnProperty.call(result, k)) {
            result = result[k];
        } else {
            return "";
        }
    }
    return type ? result.type : result.message;
};
