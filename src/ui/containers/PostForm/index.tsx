import Button from "@/ui/shared/Button";
import Input from "@/ui/shared/Input";
import Form from "@/ui/shared/Form";
import Select from "@/ui/shared/Select";
import { PostFormVM } from "./PostForm.vm";
import { PostModel } from "@/data/model/post.model";

const PostForm = () => {
  const { methods, submitHandler, isPending } = PostFormVM();

  return (
    <div className="flex flex-col gap-y-4">
      <h2>Post əlavə et</h2>
      <Form
        className="flex gap-4 justify-center"
        onSubmit={submitHandler}
        methods={methods}
      >
        <Input name="title" placeholder="Title" />
        <Input name="description" placeholder="Description" />
        <Select
          name="isRead"
          data={[
            { id: 0, name: "Xeyr" },
            { id: 1, name: "Bəli" },
          ]}
        />
        <Button isLoading={isPending}>Send</Button>
      </Form>
    </div>
  );
};

export default PostForm;
