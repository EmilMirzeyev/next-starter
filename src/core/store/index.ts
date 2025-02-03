import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./post/posts.slice";
import signStepsSlice from './auth'
import headerSlice from "./root/headerSlice";
import mediaSlice from './media'

export const store = configureStore({
  reducer: {
    header: headerSlice,
    posts: postsSlice,
    signSteps: signStepsSlice,
    media: mediaSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
