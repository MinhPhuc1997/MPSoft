import { combineReducers } from "redux";
import LoginReducers from "./login";

const rootReducer =combineReducers({
    login:LoginReducers
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>