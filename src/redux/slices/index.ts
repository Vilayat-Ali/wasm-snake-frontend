// reducers
import { appReducer } from "./app.slice";
import { gameReducer } from "./game.slice";

export const rootReducers = {
    app: appReducer,
    game: gameReducer
};