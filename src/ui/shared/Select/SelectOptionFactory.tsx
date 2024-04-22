import { ReactElement } from "react";
import { SelectDataType } from "./select.type";
import { SelectOptionVariantEnum } from "./select.enum";
import SelectOptionBase from "./SelectOptionBase";
import SelectOptionWithIcon from "./SelectOptionWithIcon";

type SelectOptionFactoryType = <T extends SelectDataType>({
  data,
  selected,
  variant,
}: {
  data: T;
  selected: boolean;
  variant: SelectOptionVariantEnum;
}) => ReactElement;

const SelectOptionFactory: SelectOptionFactoryType = ({
  data,
  selected,
  variant,
}) => {
  switch (variant) {
    case SelectOptionVariantEnum.BASE:
      return <SelectOptionBase data={data} selected={selected} />;
    case SelectOptionVariantEnum.WITH_ICON:
      return <SelectOptionWithIcon data={data} selected={selected} />;
    default:
      throw new Error("Invalid option variant");
  }
};

export default SelectOptionFactory;
