import { ListFileUploadType } from "./listFileUpload.type";
import { FieldErrorsImpl } from "react-hook-form";
import { ListFileUploadVM } from "./listFileUpload.vm";
import { Image2SVG, TrashSVG, UploadSVG } from "@public/vectors";
import { cn } from "@/core/utils/cn";
import Image from "next/image";

const ListFileUpload = ({
    name,
    fileData,
    value,
    label,
    onChange,
    hasView = true,
    formatDescription,
    ...props
}: ListFileUploadType) => {
    const {
        errors,
        uploadedFile,
        handleChangeFile,
        handleRemoveFile,
        handlePreviewFile,
        dragging,
        handleDragEnter,
        handleDragLeave,
        handleDrop,
        handleRef
    } = ListFileUploadVM({ name, fileData, value, onChange });
    const renderInput = () => (
        <>
            <div
                className={cn(
                    "relative flex items-center justify-between px-4 border h-32 rounded-xl transition-all hover:bg-gray-50 ease-in-out",
                    dragging ? "border-red-500 bg-red-50" : "border-gray-200 bg-white",
                    props.disabled ? "bg-gray-100 border-gray-300" : "",
                    errors[name] && uploadedFile && !uploadedFile.length
                        ? "border-error-500"
                        : ""
                )}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <div>
                        <UploadSVG />
                    </div>
                    <div className="flex gap-x-1 items-center">
                        <p className="text-brand-700 text-14px600">Click to upload</p>
                        <p className="text-gray-600 text-14px400">or drag and drop</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-12px400">
                            {label || "SVG, PNG, JPG or GIF (max. 800x400px)"}
                        </p>
                    </div>
                </div>
                <div className="flex">
                    {/* <label
                        htmlFor={name}
                        className="flex justify-center items-center h-10 rounded-md border border-gray-300 text-gray-500 bg-gray-100 cursor-pointer"
                    >
                        <div className="text-gray-600 text-16px500 flex gap-1 p-4">
                            Yüklə <Image2SVG className="h-6" />
                        </div>
                    </label> */}
                    <input
                        ref={handleRef}
                        multiple
                        id={name}
                        type="file"
                        onChange={handleChangeFile}
                        className="opacity-0 cursor-pointer w-full h-full text-15px400 border left-0 top-0 absolute"
                        {...props}
                    />
                </div>
            </div>
            {(errors[name] && uploadedFile && !uploadedFile.length) || (
                <p className="text-14px400 text-gray-400 mt-2">{formatDescription}</p>
            )}
        </>
    );

    const renderFile = (file: File, index: number) => {
        const hasError =
            errors[name] && (errors[name] as FieldErrorsImpl<any>)[index];
        const imageUrl = URL.createObjectURL(file);
        // const fileSizeInMB = file.size / (1024 * 1024); 
        // const fileSize =
        //     fileSizeInMB < 1
        //         ? `${(file.size / 1024).toFixed(2)} KB`
        //         : `${fileSizeInMB.toFixed(2)} MB`; 

        const fileSize = (file.size / 1024 / 1024).toFixed(2);
        return (
            <div key={file.name + index}>
                <div
                    className={cn(
                        "flex items-center justify-between px-2 border p-2 pr-3 rounded-xl",
                        hasError ? "border-error-500" : ""
                    )}
                >
                    <div className="flex gap-x-4 items-center border-r border-gray-100">
                        <div>
                            <Image
                                src={imageUrl}
                                alt={file.name}
                                width={50}
                                height={44}
                                className="h-11 w-[50px] rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p
                                className={cn(
                                    "text-14px500",
                                    file.name ? "text-gray-800" : "text-gray-500"
                                )}
                            >
                                {file.name || label}
                            </p>
                            <p className="text-gray-500 text-12px500">Hazırdır</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-y-1">
                        <p className="text-gray-500 text-12px400">{fileSize} MB</p>
                        <div className="flex items-center gap-x-3">
                            {hasView && (
                                <button type="button" onClick={() => handlePreviewFile(file)}>
                                    <Image2SVG />
                                </button>
                            )}
                            <button type="button" onClick={() => handleRemoveFile(file)}>
                                <TrashSVG />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    {hasError && (
                        <p role="alert" className="text-error-500 text-14px400">
                            {(errors[name] as any)[index].message as string}
                        </p>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            {uploadedFile && uploadedFile.length ? (
                <>
                    {renderInput()}
                    <div className="flex flex-col gap-3 my-4">
                        {uploadedFile.map(renderFile)}
                    </div>
                </>
            ) : (
                renderInput()
            )}
            <div>
                {errors[name] && (
                    <p role="alert" className="text-error-500 text-14px400">
                        {errors[name]!.message as string}
                    </p>
                )}
            </div>
        </>
    );
};

export default ListFileUpload;
