import {  useState } from "react";
import type { SelectDataType, SelectVMType } from "./select.type";
import { FieldValues, UseFormReturn, useFormContext } from "react-hook-form";
import { useUpdateEffect } from "@/core/hooks/useUpdateEffect";

export const SelectVM = <T extends SelectDataType>({
  data,
  name,
  value,
  multiple,
  onChange,
  label,
  defaultText,
  placeholder,
  valueType,
}: SelectVMType<T>) => {
  type initialValueType = T | T[];
  const resetValue = multiple ? [] : ({ id: null, name: "" } as T);
  const methods: UseFormReturn<FieldValues, any, undefined> = useFormContext();
  const hasMethods = methods && methods.formState;
  const mainValue = hasMethods ? methods.getValues(name) : value;

  const initialValue = (
    val: initialValueType | null | number | undefined
  ): initialValueType => {
    if (multiple) {
      if (!val) return [] as T[];
      if (Array.isArray(val)) {
        return val.every((v) => typeof v === "number")
          ? (val.map(
            (v) => typeof v === "number" && data.find((d) => d.id === v)
          ) as T[])
          : (val.filter((v) => v?.id !== null) as T[]);
      }
      return [];
    }
    if (val === undefined || val === null) {
      return { id: null, name: "" } as T;
    }
    if (typeof val === "number") {
      return data.find((d) => d.id === val) || ({ id: null, name: "" } as T);
    }
    return val;
  };

  const [innerValue, setInnerValue] = useState<initialValueType>(() =>
    initialValue(mainValue)
  );

  const handleSelect = (val: initialValueType): void => {
    console.log('val', val)
    const selectedValue =
      valueType === "id"
        ? Array.isArray(val)
          ? val.map((v) => v.id)
          : val.id
        : val;
    if (methods) {
      methods.setValue(name, selectedValue);
      methods.trigger(name);
    }
    if (multiple) {
      (onChange as (value: T[]) => void)?.(val as T[]);
    } else {
      (onChange as (value: T | null) => void)?.(val as T);
    }
  };

  const resetHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    if (methods) {
      methods.setValue(name, null);
      methods.trigger(name);
    }
    setInnerValue(resetValue);
    if (multiple) {
      (onChange as (value: T[]) => void)?.([]);
    } else {
      (onChange as (value: T | null) => void)?.({ id: null, name: "" } as T);
    }
  };

  useUpdateEffect(() => {
    if (hasMethods && !methods.getValues(name)) {
      setInnerValue(resetValue);
    }
  }, [methods?.formState.isSubmitSuccessful]);

  useUpdateEffect(() => {
    setInnerValue(mainValue !== null ? initialValue(mainValue) : resetValue);
  }, [mainValue, data]);

  const getValueLabel = () => {
    if (Array.isArray(innerValue)) {
      return innerValue.length === 1
        ? innerValue[0].name
        : innerValue.length > 1
          ? `${innerValue.length} seçim`
          : label || placeholder || defaultText || "Seçin";
    }
    return innerValue.id !== null
      ? innerValue.name
      : label || placeholder || defaultText || "Seçin";
  };

  return {
    methods,
    innerValue,
    handleSelect,
    resetHandler,
    hasMethods,
    getValueLabel,
  };
};
