import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostModel } from "@/data/model/post.model";
import { addPostSchema } from "@/core/schemas/formValidations/addPost.schema";
import { addPostAction } from "@/core/actions/addPost.action";
import { snackbar } from "@/ui/shared/Sanckbar";
import { useEffect, useTransition } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/useRedux";
import { resetPost } from "@/core/store/post/posts.slice";

export const PostFormVM = () => {
  const dispatch = useAppDispatch();
  const postForm = useAppSelector((state) => state.posts.postForm);
  const methods = useForm<PostModel>({
    resolver: zodResolver(addPostSchema),
    values: postForm,
  });
  let [isPending, startTransition] = useTransition();

  useEffect(() => {
    dispatch(resetPost());
  }, []);

  const onError = (data: FieldErrors<PostModel>) => {
    console.error("error:", data);
  };

  const submitHandler = methods.handleSubmit(
    (data: PostModel) =>
      startTransition(async () => {
        const res = await addPostAction({ data });
        if (res.isError) {
          snackbar("error", res.error.message);
        } else {
          methods.reset();
          dispatch(resetPost());
          snackbar("success", "Post uğurla əlavə edildi!");
        }
      }),
    onError
  );

  return { methods, submitHandler, isPending };
};
