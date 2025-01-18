export type DatePickerType = {
    placeholder: string;
    value: Date | null;
    error?: boolean;
    setValue: (vale: Date) => void;
    minDate?: Date;
    disabled?: boolean;
};
