import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IGame {
    isPaused: boolean,
    score: number,
    fieldSize: {
        rows: number, 
        cols: number
    },
    level: {
        current_level: number,
        percent_passed: number
    },
    colors: {
        snake: string,
        field: string
    }
}

const initialState: IGame = {
    isPaused: true,
    score: 0,
    fieldSize: {
        rows: 15,
        cols: 25
    },
    level: {
        current_level: 1,
        percent_passed: 0
    },
    colors: {
        snake: "#ffffff",
        field: "#000000"
    }
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
        },
        // update field size
        updateFieldSizeRows: (state: any, action: any) => {
            state.fieldSize.rows = action.payload;
        },
        // update field size
        updateFieldSizeCols: (state: any, action: any) => {
            state.fieldSize.cols = action.payload;
        },
        // new level
        passLevel: (state: any) => {
            state.level.current_level += 1;
        },
        // pass some level %
        incrementPercentLevelPassed: (state: any, action: any) => {
            state.level.percent_passed += action.payload;
        },
        // set snake color
        setSnakeColor: (state: any, action: any) => {
            state.colors.snake = action.payload
        },
        // set field color
        setFieldColor: (state: any, action: any) => {
            state.colors.field = action.payload
        }
    }
})

export const getGameState = (state: RootState): IGame => {
    return state.game;
}

export const {
    togglePause,
    incrementScore,
    updateFieldSizeRows,
    updateFieldSizeCols,
    passLevel,
    incrementPercentLevelPassed,
    setSnakeColor,
    setFieldColor
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;