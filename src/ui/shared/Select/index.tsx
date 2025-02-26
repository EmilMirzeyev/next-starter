"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { Fragment, ReactElement } from "react";
import { SelectVM } from "./select.vm";
import { XSVG, UpChevronSVG } from "@public/vectors";
import type { SelectDataType, SelectType } from "./select.type";
import SelectOptionFactory from "./options/select_option.factory";
import { SelectOptionVariantEnum } from "@/data/enum/select_option_variant.enum";
import { cn } from "@/core/utils/cn";
import { handleError } from "@/core/helpers/handleError";

const Select = <T extends SelectDataType>({
  name,
  label,
  defaultText,
  data,
  className,
  buttonClassName,
  labelClassName,
  listboxOptionsClassName,
  placeholder,
  trailing,
  leading,
  disabled,
  isReversed,
  resetType = "side",
  valueType = "id",
  multiple = false,
  variant = SelectOptionVariantEnum.BASE,
  value,
  onChange,
}: SelectType<T>): ReactElement => {
  const {
    methods,
    innerValue,
    handleSelect,
    resetHandler,
    hasMethods,
    getValueLabel,
    isOpen,
    setIsOpen
  } = SelectVM({
    data,
    value,
    name,
    multiple,
    onChange,
    label,
    defaultText,
    placeholder,
    valueType,
  });

  const hasError =
    hasMethods &&
    handleError(name, methods) &&
    methods.formState.submitCount > 0;

  return (
    <div className={cn("w-full", className)}>
      <Listbox
        value={innerValue}
        onChange={handleSelect}
        disabled={disabled}
        multiple={multiple}
      >
        {({ open }) => {
          setIsOpen(open);
          return (
            <div className="relative">
              <ListboxButton
                onClick={() => setIsOpen((prev) => !prev)}
                className={cn(
                  "relative group disabled:bg-gray-100 flex items-center justify-between w-full cursor-pointer h-14 rounded-xl bg-white py-2 px-3 border text-left sm:text-sm",
                  hasError ? "border-red-500" : "border-gray-300",
                  buttonClassName
                )}
              >
                {label && (
                  <span
                    className={cn(
                      "block absolute text-gray-500 text-11px400 duration-100",
                      (
                        Array.isArray(innerValue)
                          ? !innerValue.length
                          : innerValue?.id === null
                      )
                        ? "opacity-0"
                        : "top-1/2 -translate-y-[20px] px-1 left-2 text-xs"
                    )}
                  >
                    {label}
                  </span>
                )}
                <span
                  className={cn(
                    "flex items-center truncate duration-100 gap-x-1.5 overflow-hidden whitespace-nowrap",
                    {
                      "translate-y-1.5":
                        (Array.isArray(innerValue)
                          ? innerValue.length > 0
                          : innerValue?.id !== null) && label,
                      "text-gray-500":
                        (Array.isArray(innerValue)
                          ? !innerValue.length
                          : innerValue?.id === null) && !label,
                    },
                    labelClassName
                  )}
                >
                  <span>{leading}</span>
                  {getValueLabel()}
                </span>
                <div className="flex items-center ml-auto">
                  {!Array.isArray(innerValue) &&
                    innerValue?.id !== null &&
                    resetType === "side" && (
                      <div
                        className={cn(
                          "rounded-full size-6 flex items-center justify-center mr-2",
                          disabled ? "cursor-not-allowed" : "cursor-pointer"
                        )}
                      >
                        <XSVG onClick={resetHandler} />
                      </div>
                    )}
                  <span className="pointer-events-none relative duration-300 ease-in flex items-center group-data-[open]:rotate-0 rotate-180">
                    <UpChevronSVG className="size-3 text-gray-500" />
                  </span>
                  <span className="cursor-pointer">{trailing}</span>
                </div>
              </ListboxButton>
              <Transition
                as={Fragment}
                show={isOpen}
                enter="transition-all duration-200 ease-out"
                enterFrom="opacity-0 transform translate-y-[-4px]"
                enterTo="opacity-100 transform translate-y-0"
                leave="transition-all duration-150 ease-in"
                leaveFrom="opacity-100 transform translate-y-0"
                leaveTo="opacity-0"
              >
                <ListboxOptions
                  className={cn(
                    "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-2 ring-1 ring-black/5 z-50",
                    isReversed && "bottom-[calc(100%+10px)]",
                    listboxOptionsClassName
                  )}
                >
                  {data.length ? (
                    <>
                      {resetType === "inner" && (
                        <button
                          type="button"
                          onClick={resetHandler}
                          className="flex w-full items-center gap-x-1 relative cursor-pointer select-none text-gray-900 p-2 rounded data-[focus]:bg-gray-100 data-[selected]:bg-blue-50"
                        >
                          <XSVG className="text-brand-500 size-[18px]" />
                          Sıfırla
                        </button>
                      )}
                      {data.map((d) => (
                        <SelectOptionFactory
                          key={d.id}
                          data={d}
                          variant={variant}
                        />
                      ))}
                    </>
                  ) : (
                    <p className="text-center">Məlumat yoxdur</p>
                  )}
                </ListboxOptions>
              </Transition>
            </div>
          )
        }}
      </Listbox>
      {hasError && (
        <span role="alert" className="text-red-500 text-14px400 truncate">
          {handleError(name, methods)}
        </span>
      )}
    </div>
  );
};

export default Select;
