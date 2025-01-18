import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./post/posts.slice";
import signUpSlice from './auth/sign_up.slice'

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    signup: signUpSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
