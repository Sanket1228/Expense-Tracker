import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState, AppDispath } from "../store";

export const useAppDispath = () => useDispatch<AppDispath>();

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;