export type CheckboxType = {
    name: string;
    value?: boolean;
    label?: string;
    labelClassName?: string;
    enabled?: boolean;
    onChange?: (val: boolean) => void;
};

export type CheckboxVMType = Pick<
    CheckboxType,
    "name" | "value" | "onChange"
>;
