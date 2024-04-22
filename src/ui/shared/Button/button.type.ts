import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { ButtonHTMLAttributes } from "react";

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantsEnum;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
};
