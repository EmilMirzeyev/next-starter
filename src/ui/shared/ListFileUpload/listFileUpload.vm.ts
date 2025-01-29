import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FieldValues, useFormContext, UseFormReturn } from "react-hook-form";
import { ListFileUploadVMType } from "./listFileUpload.type";

export const ListFileUploadVM = ({
    name,
    value,
    onChange,
}: ListFileUploadVMType) => {
    const [dragging, setDragging] = useState(false);
    const methods: UseFormReturn<FieldValues, any, undefined> = useFormContext();
    const hasMethods = methods && methods.formState;
    const mainValue = hasMethods ? methods.getValues(name) : value;
    const [uploadedFile, setUploadedFile] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setUploadedFile((prevFiles = []) => {
                const updatedFiles = [...prevFiles, ...newFiles];
                if (methods.setValue) {
                    methods.setValue(name, updatedFiles);
                    methods.trigger(name);
                }
                return updatedFiles;
            });
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    const handleRemoveFile = (file: File) => {
        const updatedFiles = uploadedFile.filter((f) => f !== file);
        setUploadedFile(updatedFiles);
        if (typeof onChange === "function") {
            onChange(updatedFiles);
        }
    };

    const handlePreviewFile = (file: File) => {
        window.open(URL.createObjectURL(file), "_blank");
    };

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
    };
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files.length) {
            handleChangeFile({ target: { files: e.dataTransfer.files } } as any);
        }
    };

    useEffect(() => {
        setUploadedFile(mainValue);
    }, [mainValue]);

    const handleRef = (el: HTMLInputElement | null) => {
        fileInputRef.current = el;
        methods.register(name);
    };

    return {
        register: methods.register,
        errors: methods.formState.errors,
        uploadedFile,
        handleChangeFile,
        handleRemoveFile,
        handlePreviewFile,
        dragging,
        handleDragEnter,
        handleDragLeave,
        handleDrop,
        handleRef
    };
};
