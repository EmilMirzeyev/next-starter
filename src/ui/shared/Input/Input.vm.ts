import { useDebounce } from "@/core/hooks/useDebounce";
import { useUpdateEffect } from "@/core/hooks/useUpdateEffect";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { FieldValues, UseFormReturn, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  type?: string;
  isDebounce: boolean;
  onDebounce?: (value: string) => void;
  onChange?: (value: string) => void;
};

export const InputVM = ({
  name,
  type,
  isDebounce,
  onDebounce,
  onChange,
}: Props) => {
  const methods: UseFormReturn<FieldValues, any, undefined> = useFormContext();
  const [innerValue, setInnerValue] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const debouncedValue = useDebounce<string>(innerValue!, 500);
  const reg = !!methods ? { ...methods.register?.(name) } : undefined;
  const hasMethods = methods && methods.formState;

  useUpdateEffect(() => {
    dirty && isDebounce && onDebounce?.(innerValue!);
  }, [debouncedValue]);

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    type === "number" && ["e", "+"].includes(e.key) && e.preventDefault();
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    isDebounce && setInnerValue(e.target.value);
    !dirty && setDirty(true);
    onChange?.(e.target.value);
  };

  return {
    reg,
    hasMethods,
    methods,
    keyDownHandler,
    changeHandler,
  };
};
