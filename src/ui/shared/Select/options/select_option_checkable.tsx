import { ListboxOption } from "@headlessui/react";
import { SelectDataType } from "../select.type";
import { XSVG } from "@public/vectors";

const SelectOptionCheckable = <T extends SelectDataType>({
  data,
}: {
  data: T;
}) => {
  return (
    <ListboxOption
      value={data}
      disabled={data.disabled}
      className="relative flex items-center gap-x-2 cursor-pointer select-none text-gray-900 p-2 rounded data-[focus]:bg-gray-100 data-[selected]:bg-blue-50 group"
    >
      <span className="shrink-0 flex justify-center items-center size-5 border border-gray-200 rounded-sm group-data-[selected]:border-blue-600">
        <XSVG className="opacity-0 group-data-[selected]:opacity-100 size-5 text-blue-500" />
      </span>
      {data.name}
    </ListboxOption>
  );
};

export default SelectOptionCheckable;
