import { Listbox } from "@headlessui/react";
import { SelectDataType } from "./select.type";
import { twMerge } from "tailwind-merge";

const SelectOptionBase = <T extends SelectDataType>({
  data,
  selected,
}: {
  data: T;
  selected: boolean;
}) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        twMerge(
          "relative cursor-pointer select-none text-gray-900 p-2 rounded",
          active ? "bg-gray-100" : "",
          selected ? "bg-blue-50" : ""
        )
      }
      disabled={data.disabled}
      value={data}
    >
      {data.name}
    </Listbox.Option>
  );
};

export default SelectOptionBase;
