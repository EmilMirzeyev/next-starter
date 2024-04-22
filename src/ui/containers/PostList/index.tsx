"use client";
import { PostListType } from "./PostList.type";
import { PostListVM } from "./PostList.vm";
import { RequestStateEnum } from "@/data/enum/request_state.enum";
import PostCard from "@/ui/components/PostCard";
import CModal from "@/ui/shared/Modal";
import PostForm from "../PostForm";
import Button from "@/ui/shared/Button";

const PostList = ({ posts }: PostListType) => {
  const {
    requestState,
    visible,
    isPending,
    activePost,
    setActivePost,
    setVisible,
    deleteHandler
  } = PostListVM({ posts });

  return (
    <div className="flex flex-col gap-y-10">
      <PostForm />
      <div className="grid grid-cols-3 gap-4">
        {requestState === RequestStateEnum.EMPTY && <div>No Data</div>}
        {requestState === RequestStateEnum.SUCCESS &&
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              deleteHandler={() => {
                setActivePost(post);
                setVisible(true);
              }}
            />
          ))}
      </div>
      <CModal visible={visible} setVisible={setVisible}>
        <div className="p-4">
          <p>Silmek istediyinizden əminsiz ?</p>
          <Button
            className="bg-red-500 w-full"
            isLoading={isPending}
            onClick={() => deleteHandler(activePost!.id)}
          >
            Sil
          </Button>
        </div>
      </CModal>
    </div>
  );
};

export default PostList;
