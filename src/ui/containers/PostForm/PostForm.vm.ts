import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostModel } from "@/data/model/post.model";
import { addPostSchema } from "@/core/schemas/formValidations/addPost.schema";
import { addPostAction } from "@/core/actions/addPost.action";
import { snackbar } from "@/ui/shared/Sanckbar";
import { useTransition } from "react";

const resetForm = { title: "", description: "", isRead: null };

export const PostFormVM = () => {
  const methods = useForm<PostModel>({
    resolver: zodResolver(addPostSchema),
    defaultValues: resetForm,
  });
  let [isPending, startTransition] = useTransition();

  const onError = (data: FieldErrors<PostModel>) => {
    console.error("error:", data);
  };

  const submitHandler = methods.handleSubmit(
    (data: PostModel) =>
      startTransition(async () => {
        const res = await addPostAction({ data });
        if (res.isError) {
          snackbar("error", res.error);
        } else {
          methods.reset();
          snackbar("success", "Post uğurla əlavə edildi!");
        }
      }),
    onError
  );

  return { methods, submitHandler, isPending };
};
