export type CheckboxButtonType = {
    name: string;
    value?: boolean;
    text?: string;
    className?: string;
    label?: string;
    labelClassName?: string;
    enabled?: boolean;
    onChange?: (val: boolean) => void;
};

export type CheckboxButtonVMType = Pick<
    CheckboxButtonType,
    "name" | "value" | "onChange"
>;
