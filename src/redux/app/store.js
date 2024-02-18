import { configureStore } from "@reduxjs/toolkit";
import likedSlice from "../features/liked/likedSlice";

export const store = configureStore({
  reducer: {
    liked: likedSlice,
  },
});
