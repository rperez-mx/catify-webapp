import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import { Cat } from "./features/cats/catSlice";
import { setUser, user, UserInfo } from "./features/user/userSlice";
import { RootState, AppDispatch } from "./store";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Custom hook, useAppState

export const useAppState = () => {
  const cat: Cat = useAppSelector((state: RootState) => state.cats.cat);
  const isLogged: boolean = useAppSelector(
    (state: RootState) => state.user.logged
  );
  const user: user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();
  return {cat, isLogged, user, dispatch}
}