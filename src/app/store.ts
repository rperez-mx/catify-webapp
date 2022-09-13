import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./features/cats/catSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cats: catSlice,
    user: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch