import { BaseType } from "@/data/types/base.type";
import { SelectOptionVariantEnum } from "./select.enum";
import { Overwrite } from "@/data/types/overwrite.type";

export type SelectDataType = Overwrite<BaseType, { id: number | null }> & {disabled?: boolean}

export type SelectType<T extends SelectDataType> = {
  data: T[];
  className?: string;
  label?: string;
  name: string;
  hasReset?: boolean;
  value?: T | null | number;
  variant?: SelectOptionVariantEnum
  onChange?: (value: T) => void;
};