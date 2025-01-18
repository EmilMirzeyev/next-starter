import type { TextareaHTMLAttributes } from "react";

//TODO: if onDebounce works isDebounce required

export type TextareaType = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange"
> & {
    label?: string;
    placeholder?: string;
    name: string;
    isDebounce?: boolean;
    inputClassName?: string;
    onChange?: (value: string) => void;
    onDebounce?: (value: string) => void;
};
