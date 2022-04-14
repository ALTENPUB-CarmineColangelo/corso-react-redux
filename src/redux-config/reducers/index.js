import {combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { countReducer } from "./countReducer";
import { usersReducer } from "./usersReducer";

export const rootReducers = combineReducers({
    auth: authReducer,
    count: countReducer,
    users: usersReducer
})