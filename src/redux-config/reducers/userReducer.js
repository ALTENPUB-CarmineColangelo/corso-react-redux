import { USER_TYPE } from "../actions/userActions";

const initialState = { }

export const userReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case USER_TYPE.request:
            return {
                loading: true
            }
        case USER_TYPE.succes:
            return {
                data: action.payload
            }
        case USER_TYPE.error:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}