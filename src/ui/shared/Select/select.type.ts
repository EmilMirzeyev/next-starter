import { BaseModel } from "@/core/entities/general/models/base.model";
import { SelectOptionVariantEnum } from "@/data/enum/select_option_variant.enum";
import { Overwrite } from "@/data/types/overwrite.type";
import { ReactElement, ReactNode } from "react";

export type SelectDataType = Overwrite<BaseModel, { id: number | null }> & {
  disabled?: boolean;
};

export type SelectType<T extends SelectDataType> = {
  data: T[];
  className?: string;
  buttonClassName?: string;
  labelClassName?: string;
  placeholder?: string;
  trailing?: ReactNode;
  leading?: ReactNode;
  label?: string;
  defaultText?: string;
  name: string;
  disabled?: boolean;
  isReversed?: boolean;
  resetType?: "inner" | "side" | "none"
  valueType?: "id" | "object";
  variant?: SelectOptionVariantEnum;
} & (
    | {
      multiple?: false;
      value?: T | null | number;
      onChange?: (value: T) => void;
    }
    | {
      multiple: true;
      value?: T[] | null | number;
      onChange?: (value: T[]) => void;
    }
  );

export type SelectVMType<T extends SelectDataType> = Pick<
  SelectType<T>,
  "data" | "value" | "onChange" | "name" | "multiple" | "label" | "placeholder" | "defaultText" | "valueType"
>;

export type SelectOptionFactoryType = <T extends SelectDataType>({
  data,
  variant,
}: {
  data: T;
  variant: SelectOptionVariantEnum;
}) => ReactElement;
