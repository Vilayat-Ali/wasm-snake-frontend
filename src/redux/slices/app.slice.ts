import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IApp {
    darkThemeOn: boolean
}

const initialState: IApp = {
    darkThemeOn: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // toggle theme
        toggleTheme: (state: any) => {
            state.darkThemeOn = !state.darkThemeOn;
        }
    }
})

export const isDarkThemeActive = (state: RootState): boolean => {
    return state.app.darkThemeOn;
}

export const {
    toggleTheme
} = appSlice.actions;

export const appReducer = appSlice.reducer;