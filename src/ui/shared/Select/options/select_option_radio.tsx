import { ListboxOption } from "@headlessui/react";
import { SelectDataType } from "../select.type";
import { Check2SVG } from "@public/vectors";

const SelectOptionRadio = <T extends SelectDataType>({
    data,
}: {
    data: T;
}) => {
    return (
        <ListboxOption
            value={data}
            disabled={data.disabled}
            className="relative flex items-center justify-between gap-x-2 cursor-pointer select-none text-gray-900 py-2 px-3 rounded-xl data-[focus]:bg-gray-100 data-[selected]:text-brand-600 data-[selected]:bg-brand-50 group"
        >
            {data.name}
            <Check2SVG className="opacity-0 group-data-[selected]:opacity-100 size-6" />
        </ListboxOption>
    );
};

export default SelectOptionRadio;
