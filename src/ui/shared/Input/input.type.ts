import { ReactNode, InputHTMLAttributes } from "react";

//TODO: if onDebounce works isDebounce required

export type InputType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> & {
  label?: string;
  placeholder?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  name: string;
  type?: string;
  isDebounce?: boolean;
  inputClassName?: string;
  onChange?: (value: string) => void;
  onDebounce?: (value: string) => void;
};