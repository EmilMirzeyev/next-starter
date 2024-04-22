import { Listbox } from "@headlessui/react";
import { SelectDataType } from "./select.type";
import UpChevronSVG from "@public/vectors/up_chevron.svg";
import { twMerge } from "tailwind-merge";

const SelectOptionWithIcon = <T extends SelectDataType>({
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
          "flex items-center relative cursor-default select-none text-gray-900 p-2 rounded",
          active ? "bg-gray-100" : "",
          selected ? "bg-blue-50" : ""
        )
      }
      disabled={data.disabled}
      value={data}
    >
      <UpChevronSVG className="w-4 h-4" />
      {data.name}
    </Listbox.Option>
  );
};

export default SelectOptionWithIcon;
