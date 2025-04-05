import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/providers/store";

// Кастомный `useDispatch`, который сразу знает про наш `store`
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Кастомный `useSelector`, который знает тип `state`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
