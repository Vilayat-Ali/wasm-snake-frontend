import {configureStore} from "@reduxjs/toolkit";
import {rootReducers} from "@/redux/slices";
import { useDispatch }from "react-redux";

export const store = configureStore({
    reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch