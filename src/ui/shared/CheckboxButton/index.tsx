import { Checkbox as CheckboxHUI, Field, Label } from "@headlessui/react";
import { PlusSVG } from "@public/vectors";
import { cn } from "@/core/utils/cn";
import { CheckboxButtonType } from "./checkbox_button.type";
import { CheckboxButtonVM } from "./checkbox_button.vm";

const CheckboxButton = ({
    name,
    value,
    label,
    className,
    text,
    fieldClassName,
    labelClassName,
    enabled=true,
    onChange,
}: CheckboxButtonType) => {
    const { innerValue, handleCheck } = CheckboxButtonVM({ name, value, onChange });
    return (
        <Field className={cn("w-full", fieldClassName)}>
            <CheckboxHUI
                value={innerValue}
                name={name}
                checked={enabled && innerValue}
                onChange={handleCheck}
                className={cn(
                    "group cursor-pointer text-16px500 flex gap-x-1 justify-center items-center centered h-11 py-2.5 px-3.5 rounded-xl border border-gray-200 data-[checked]:border-brand-300 data-[checked]:text-brand-600 bg-gray-50 hover:bg-gray-200 transition-all ease-in-out data-[checked]:bg-brand-100 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500",
                    className
                )}
            >
                {text}
                <PlusSVG className="transition-transform duration-300 ease-in-out group-data-[checked]:rotate-45 group-data-[checked]:text-brand-600" />
            </CheckboxHUI>
            <Label
                className={cn(
                    "data-[disabled]:opacity-50 text-gray-700 text-14px400",
                    labelClassName
                )}
            >
                {label}
            </Label>
        </Field>
    );
};

export default CheckboxButton;
