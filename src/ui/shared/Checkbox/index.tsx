import { Checkbox as CheckboxHUI, Field, Label } from "@headlessui/react";
import { CheckboxType } from "./checkbox.type";
import { CheckboxVM } from "./checkbox.vm";
import { CheckSVG } from "@public/vectors";
import { cn } from "@/core/utils/cn";

const Checkbox = ({
    name,
    value,
    label,
    labelClassName,
    enabled,
    onChange,
}: CheckboxType) => {
    const { handleCheck } = CheckboxVM({ name, value, onChange });

    return (
        <Field className="flex items-center gap-x-2">
            <CheckboxHUI
                name={name}
                checked={enabled}
                onChange={handleCheck}
                className="group cursor-pointer flex justify-center items-center centered size-4 rounded border border-gray-300 data-[checked]:border-blue-600 bg-white data-[checked]:bg-blue-600 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
            >
                <CheckSVG className="hidden group-data-[checked]:block text-white"/>
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

export default Checkbox;
