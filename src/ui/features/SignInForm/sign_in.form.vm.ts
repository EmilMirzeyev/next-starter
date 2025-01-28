import type { SignInModel } from "@/core/entities/auth/models/sign_in.model";
import { signInFormSchema } from "@/core/entities/auth/schemas/formValidations/sgin_in_form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

const restValues = { email: "", password: "" };

export const SignInFormVM = () => {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("text");
  const methods = useForm<SignInModel>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: restValues,
  });

  const onSubmit = (data: SignInModel) => {
    console.log("data", data);
    router.push("/dashboard");
    methods.reset();
  };

  const onError = (error: FieldErrors<SignInModel>) => {
    console.error("validation error", error);
  };

  const submitHandler = methods.handleSubmit(onSubmit, onError);

  return {
    methods,
    passwordType,
    submitHandler,
    setPasswordType,
  };
};
