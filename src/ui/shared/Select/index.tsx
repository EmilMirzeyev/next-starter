"use client"
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
  placeholder,
  trailing,
  leading,
  disabled,
  isReversed,
  hasReset = true,
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
  } = SelectVM({
    data,
    value,
    name,
    multiple,
    onChange,
    label,
    defaultText,
    placeholder,
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
        <div className="relative">
          <ListboxButton
            className={cn(
              "relative group disabled:bg-gray-100 flex items-center justify-between w-full cursor-pointer h-14 rounded-xl bg-white py-2 px-5 border text-left sm:text-sm",
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
                "flex items-center truncate duration-100 gap-x-1.5",
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
            <div className="flex items-center gap-2 pl-3 ml-auto">
              {!Array.isArray(innerValue) &&
                innerValue?.id !== null &&
                hasReset && (
                  <div
                    className={cn(
                      "bg-gray-200 rounded-full size-6 flex items-center justify-center",
                      disabled ? "cursor-not-allowed" : "cursor-pointer"
                    )}
                  >
                    <XSVG onClick={resetHandler} />
                  </div>
                )}
              <span className="pointer-events-none relative duration-300 ease-in flex items-center group-data-[open]:rotate-0 rotate-180">
                <UpChevronSVG className="size-3" />
              </span>
              <span className="cursor-pointer">{trailing}</span>
            </div>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions
              className={cn(
                "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-2 ring-1 ring-black/5 z-50",
                isReversed && "bottom-[calc(100%+10px)]"
              )}
            >
              {data.length ? (
                data.map((d) => (
                  <SelectOptionFactory key={d.id} data={d} variant={variant} />
                ))
              ) : (
                <p className="text-center">Məlumat yoxdur</p>
              )}
            </ListboxOptions>
          </Transition>
        </div>
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
