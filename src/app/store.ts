import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./features/cats/catSlice";

export const store = configureStore({
  reducer: {
    cats: catSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch