import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./post/posts.slice";
import signStepsSlice from './auth/sign_steps.slice'
import headerReducer from "./root/headerSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    posts: postsSlice,
    signSteps: signStepsSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
