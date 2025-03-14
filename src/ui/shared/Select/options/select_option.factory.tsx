import { SelectOptionVariantEnum } from "@/data/enum/select_option_variant.enum";
import { SelectOptionFactoryType } from "../select.type";
import SelectOptionBase from "./select_option_base";
import SelectOptionCheckable from "./select_option_checkable";
import SelectOptionRadio from "./select_option_radio";

const SelectOptionFactory: SelectOptionFactoryType = ({ data, variant }) => {
  const optionComponents = {
    [SelectOptionVariantEnum.BASE]: SelectOptionBase,
    [SelectOptionVariantEnum.CHECKABLE]: SelectOptionCheckable,
    [SelectOptionVariantEnum.RADIO]: SelectOptionRadio,
  };

  const OptionComponent = optionComponents[variant];
  if (!OptionComponent) {
    throw new Error("Invalid option variant");
  }

  return <OptionComponent data={data} />;
};

export default SelectOptionFactory;
