"use client";
import { Field, Radio, RadioGroup as HRadioGroup } from "@headlessui/react";
import { type ReactNode } from "react";
import { RadioGroupType } from "./radio_group.type";
import { RadioGroupVM } from "./radio_group.vm";
import { RequestStateEnum } from "@/data/enum/request_state.enum";

const RadioGroup = <
    T extends { id: number; disabled?: boolean; render: ReactNode },
>({
    name,
    data,
    state = RequestStateEnum.SUCCESS,
    toggle = false,
    className,
    value,
    onChange,
}: RadioGroupType<T>) => {
    const { innerValue, handleSelect, clickOnSelected } = RadioGroupVM({
        data,
        name,
        value,
        onChange,
    });

    if (state === RequestStateEnum.LOADING) {
        return (
            <div className="h-full flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <div className="w-12 h-12 border-b-2 border-l-2 border-gray-300 rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    return (
        <HRadioGroup
            value={innerValue}
            onChange={handleSelect}
            className={className}
            aria-label={name}
        >
            {state === RequestStateEnum.SUCCESS &&
                data.map((d) => (
                    <Field
                        key={d.id}
                        disabled={d.disabled}
                        className="w-full data-[disabled]:cursor-not-allowed cursor-pointer"
                    >
                        <Radio
                            value={d}
                            className="group"
                            onClick={() =>
                                d.id === innerValue?.id && toggle && clickOnSelected()
                            }
                        >
                            {d.render}
                        </Radio>
                    </Field>
                ))}
        </HRadioGroup>
    );
};

export default RadioGroup;

