import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { z } from "zod";

type SubscribeFormModel = z.infer<typeof subscribeFormSchema>;

const subscribeFormSchema = z.object({
    email: z.string().min(1, "Email address is required !").email({ message: "Invalid email address !" }),
});

export const SubscribeFormVM = () => {
    const methods = useForm<SubscribeFormModel>({
        resolver: zodResolver(subscribeFormSchema),
    });

    const onSubmit = (data: SubscribeFormModel) => {
        console.log("data", data);
    };

    const onError = (error: FieldErrors<SubscribeFormModel>) => {
        console.error("validation errors:", error);
    };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    return { methods, submitHandler };
};
