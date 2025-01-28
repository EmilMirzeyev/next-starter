import { useDebounce } from "@/core/hooks/useDebounce";
import { useUpdateEffect } from "@/core/hooks/useUpdateEffect";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { FieldValues, UseFormReturn, useFormContext } from "react-hook-form";
import { InputVMType } from "./input.type";
import { useMask } from '@react-input/mask';

export const InputVM = ({
  name,
  type,
  mask,
  pattern,
  isDebounce,
  onDebounce,
  onChange,
}: InputVMType) => {
  const methods: UseFormReturn<FieldValues, any, undefined> = useFormContext();
  const [innerValue, setInnerValue] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const debouncedValue = useDebounce<string>(innerValue!, 500);
  const reg = methods
    ? {
      ...methods.register?.(name, {
        onChange: (e) => changeHandler(e),
      }),
    }
    : undefined;
  const hasMethods = methods && methods.formState;
  const inputMaskRef = useMask({
    mask,
    replacement: pattern,
  });


  useUpdateEffect(() => {
    if (dirty && isDebounce) {
      onDebounce?.(innerValue!);
    }
  }, [debouncedValue]);

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type === "number" && ["e", "+"].includes(e.key)) {
      e.preventDefault();
    }
  };
  
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (isDebounce) {
      setInnerValue(e.target.value);
    }
    if (!dirty) {
      setDirty(true);
    }
    onChange?.(e.target.value);
  };
  

  const numberInputOnWheelPreventChange = (
    e: React.WheelEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    target.blur();
    e.stopPropagation();
  };

  const preventScrolling =
    type === "number"
      ? {
        onWheel: numberInputOnWheelPreventChange
      }
      : undefined;


  const handleError = (key: string): string => {
    const keys = key.split(".");
    let result: Record<string, any> = methods.formState.errors;
    for (const k of keys) {
      if (result && result.hasOwnProperty(k)) {
        result = result[k];
      } else {
        return "";
      }
    }
    return result.message;
  };

  const regWithRef = mask
    ? {
      ...reg,
      ref: (e: HTMLInputElement) => {
        reg?.ref(e);
        inputMaskRef.current = e;
      },
    }
    : reg;

  return {
    reg: regWithRef,
    preventScrolling,
    hasMethods,
    methods,
    keyDownHandler,
    changeHandler,
    handleError,
  };
};
