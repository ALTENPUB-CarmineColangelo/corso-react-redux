import {combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { countReducer } from "./countReducer";
import { usersReducer } from "./usersReducer";
import { userReducer } from "./userReducer";

export const rootReducers = combineReducers({
    auth: authReducer,
    count: countReducer,
    users: usersReducer,
    user: userReducer
})