import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type FileDataType = {
    id: number;
    name: string;
    token: string;
    fileUrl: string;
};

export type ListFileUploadType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> &
    any & {
        value: File;
        name: string;
        fileData?: FileDataType[];
        label?: string;
        onChange: (data: File | undefined) => void;
        hasView?: boolean;
        formatDescription?: string;
    };

export type ListFileUploadVMType = Pick<
    ListFileUploadType,
    "name" | "fileData" | "value" | "onChange" | "multiple" | "disabled"
>;
