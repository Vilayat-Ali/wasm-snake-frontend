import { createSlice } from "@reduxjs/toolkit";

export interface IGame {
    isPaused: boolean,
    score: number
}

const initialState = {
    isPaused: true,
    score: 0
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // pause and unpause
        togglePause: (state: any) => {
            state.isPaused = !state.isPaused;
        },
        // increase score
        incrementScore: (state: any, action: any) => {
            state.score += action.payload;
        }
    }
})

export const {
    togglePause,
    incrementScore
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;