import { cn } from "@/core/utils/cn";
import { TextareaType } from "./textarea.type";
import { TextareaVM } from "./textarea.vm";

const Textarea = ({
    label,
    name,
    isDebounce = false,
    placeholder,
    onChange,
    onDebounce,
    ...props
}: TextareaType) => {
    const { reg, hasMethods, methods, changeHandler } = TextareaVM({
        name,
        isDebounce,
        onDebounce,
        onChange,
    });

    return (
        <div className="w-full">
            <div
                className={cn(
                    "relative flex items-center gap-x-4 px-4 border border-solid rounded-lg bg-white",
                    props?.disabled ? "bg-gray-100" : "bg-white",
                    hasMethods && methods.formState.errors[name]
                        ? "border-error-500"
                        : "border-softBlack"
                )}
            >
                <div className="relative h-full flex-grow">
                    <textarea
                        aria-label={name}
                        id={name}
                        placeholder={label ? " " : placeholder}
                        className={cn(
                            "w-full h-full peer text-15px400 pt-5 bg-transparent resize-none",
                            label ? "pt-2" : ""
                        )}
                        onChange={changeHandler}
                        {...props}
                        {...reg}
                    />

                    {label && (
                        <label
                            htmlFor={name}
                            className="absolute text-14px400 text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-4 -left-0.5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-4 peer-focus:scale-75"
                        >
                            {label}
                        </label>
                    )}
                </div>
            </div>
            {hasMethods && methods.formState.errors[name] && (
                <span role="alert" className="text-error-500 text-14px400">
                    {methods.formState.errors[name]!.message as string}
                </span>
            )}
        </div>
    );
};

export default Textarea;
