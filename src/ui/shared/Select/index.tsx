import { Listbox, Transition } from "@headlessui/react";
import { Fragment, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import type { SelectDataType, SelectType } from "./select.type";
import { SelectOptionVariantEnum } from "./select.enum";
import { SelectVM } from "./Select.vm";
import { UpChevronSVG, XSVG } from "@public/vectors";
import SelectOptionFactory from "./SelectOptionFactory";

const Select = <T extends SelectDataType>({
  data,
  className,
  label,
  name,
  hasReset = true,
  variant = SelectOptionVariantEnum.BASE,
  value,
  onChange,
}: SelectType<T>): ReactElement => {
  const { innerValue, handleSelect, resetHandler, hasMethods, methods } =
    SelectVM({
      data,
      value,
      name,
      onChange,
    });

  return (
    <div className={twMerge("w-full", className)}>
      <Listbox value={innerValue} onChange={handleSelect}>
        {({ open }) => {
          return (
            <div className="relative">
              <Listbox.Button
                className={[
                  "relative flex items-center justify-between w-full cursor-default h-14 rounded-lg bg-white focus-within:border-gray-400 py-2 p-3 border text-left sm:text-sm",
                  hasMethods &&
                  methods.formState.errors[name] &&
                  methods.formState.submitCount > 0
                    ? "border-red"
                    : "border-softBlack",
                ].join(" ")}
              >
                {label && (
                  <span
                    className={`block truncate duration-100 text-11px400 absolute text-gray-500 ${
                      innerValue?.id === null
                        ? "opacity-0"
                        : "top-1/2 -translate-y-[20px] px-1 left-2 text-xs"
                    }`}
                  >
                    {label}
                  </span>
                )}
                <span
                  className={[
                    "block truncate duration-100",
                    innerValue.id !== null && !!label ? "translate-y-1.5" : "",
                    innerValue.id === null && !label ? "text-gray-500" : "",
                  ].join(" ")}
                >
                  {innerValue.id !== null ? innerValue.name : label || "Seçin"}
                </span>
                <div className={`flex items-center gap-2 pl-3 ml-auto`}>
                  {innerValue?.id !== null && hasReset && (
                    <div className="bg-gray-200 rounded-full cursor-pointer w-6 h-6 flex items-center justify-center">
                      <XSVG onClick={resetHandler} />
                    </div>
                  )}
                  <span
                    className={[
                      "pointer-events-none relative duration-300 ease-in  flex items-center",
                      open ? "-rotate-0" : "rotate-180",
                    ].join(" ")}
                  >
                    <UpChevronSVG className="w-3 h-3" />
                  </span>
                </div>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-1 ring-1 ring-black/5 z-50">
                  {data.map((d) => (
                    <SelectOptionFactory
                      key={d.id}
                      data={d}
                      selected={innerValue.id === d.id}
                      variant={variant}
                    />
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          );
        }}
      </Listbox>
      {hasMethods &&
        methods.formState.errors[name] &&
        methods.formState.submitCount > 0 && (
          <span role="alert" className="text-red-500 text-14px400">
            {methods.formState.errors[name]!.message as string}
          </span>
        )}
    </div>
  );
};

export default Select;
