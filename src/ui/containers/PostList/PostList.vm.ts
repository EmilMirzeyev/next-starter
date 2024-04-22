import { useMemo, useState, useTransition } from "react";
import { PostListType } from "./PostList.type";
import { RequestStateEnum } from "@/data/enum/request_state.enum";
import { snackbar } from "@/ui/shared/Sanckbar";
import { deletePostAction } from "@/core/actions/deletePost.action";
import type { PostModel } from "@/data/model/post.model";

export const PostListVM = ({ posts }: PostListType) => {
  const [visible, setVisible] = useState(false);
  const [activePost, setActivePost] = useState<PostModel | null>(null);
  let [isPending, startTransition] = useTransition();

  const requestState = useMemo(() => {
    if (posts?.length) return RequestStateEnum.SUCCESS;
    if (posts?.length === 0) return RequestStateEnum.EMPTY;
  }, [posts]);

  const deleteHandler = (id: number) =>
    startTransition(async () => {
      const res = await deletePostAction({ id });
      if (res.isError) {
        snackbar("error", res.error);
      } else {
        setVisible(false);
        snackbar("success", "Post uğurla silindi!");
      }
    });

  return {
    requestState,
    visible,
    isPending,
    activePost,
    setActivePost,
    setVisible,
    deleteHandler,
  };
};
