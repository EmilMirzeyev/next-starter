import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export type FormType = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  methods: UseFormReturn<FieldValues, any, FieldValues> | any;
};
