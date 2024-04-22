import { FormProvider } from "react-hook-form";
import { FormType } from "./form.type";

const Form = ({ children, methods, ...props }: FormType) => {
  return (
    <FormProvider {...methods}>
      <form {...props}>{children}</form>
    </FormProvider>
  );
};

export default Form;
