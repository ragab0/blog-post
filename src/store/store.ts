import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/blogSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
