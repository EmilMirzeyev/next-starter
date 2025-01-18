import { ListboxOption } from "@headlessui/react";
import { SelectDataType } from "../select.type";

const SelectOptionBase = <T extends SelectDataType>({ data }: { data: T }) => {
  return (
    <ListboxOption
      value={data}
      disabled={data.disabled}
      className="relative cursor-pointer select-none text-gray-900 p-2 rounded data-[focus]:bg-gray-100 data-[selected]:bg-blue-50"
    >
      {data.name}
    </ListboxOption>
  );
};

export default SelectOptionBase;
