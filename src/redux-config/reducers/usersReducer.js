import { USERS_TYPE } from "../actions/usersActions";

const initialState = { list: [] }

export const usersReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case USERS_TYPE.request:
            return {
                loading: true
            }
        case USERS_TYPE.succes:
            return {
                list: action.payload
            }
        case USERS_TYPE.error:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}