import { MouseEvent, useState } from "react";
import type { SelectType, SelectDataType } from "./select.type";
import { FieldValues, UseFormReturn, useFormContext } from "react-hook-form";
import { useUpdateEffect } from "@/core/hooks/useUpdateEffect";

export const SelectVM = <T extends SelectDataType>({
  data,
  name,
  value,
  onChange,
}: Pick<SelectType<T>, "data" | "value" | "onChange" | "name">) => {
  const methods: UseFormReturn<FieldValues, any, undefined> = useFormContext();
  const hasMethods = methods && methods.formState;
  const mainValue = hasMethods ? methods.getValues(name) : value;

  const initialValue = (val: T | null | number | undefined): T => {
    if (val === undefined || val === null) {
      return { id: null, name: "" } as T;
    }
    if (typeof val === "number") {
      return data.find((d) => d.id === val) || ({ id: null, name: "" } as T);
    }
    return val;
  };

  const [innerValue, setInnerValue] = useState<T>(() =>
    initialValue(mainValue)
  );

  const handleSelect = (val: T): void => {
    if (!!methods) {
      methods.setValue(name, val.id);
      methods.trigger(name);
    }
    setInnerValue(val);
    onChange?.(val);
  };

  useUpdateEffect(() => {
    if (
      hasMethods &&
      (methods.getValues(name) === null ||
        methods.getValues(name) === undefined)
    ) {
      setInnerValue({ id: null, name: "" } as T);
    }
  }, [methods?.formState.isSubmitSuccessful]);

  const resetHandler = (e: MouseEvent<SVGSVGElement>): void => {
    e.stopPropagation();
    if (!!methods) {
      methods.setValue(name, null);
      methods.trigger(name);
    }
    setInnerValue({ id: null, name: "" } as T);
    onChange?.({ id: null, name: "" } as T);
  };

  useUpdateEffect(() => {
    mainValue !== null
      ? setInnerValue(initialValue(mainValue))
      : setInnerValue({ id: null, name: "" } as T);
  }, [mainValue]);

  return { innerValue, handleSelect, resetHandler, hasMethods, methods };
};
