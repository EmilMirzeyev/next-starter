import { PostModel } from "@/data/model/post.model";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { postForm: PostModel } = {
  postForm: {
    id: 0,
    description: "",
    title: "",
    isRead: null,
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<PostModel>) => {
      Object.assign(state.postForm, action.payload);
    },
    resetPost: (state) => {
      Object.assign(state.postForm, initialState.postForm);
    },
  },
});

export const { setPost, resetPost } = postsSlice.actions;

export default postsSlice.reducer;
