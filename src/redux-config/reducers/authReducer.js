import { AUTH_TYPE } from "../actions/authActions";

const initialState = { 
    isAuth: null,
    loading: false
 }

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH_TYPE.request:
            return {
                ...state,
                loading: true
            }
        case AUTH_TYPE.ok: 
            return {
                loading: false,
                isAuth: true
            }
        case AUTH_TYPE.ko:
            return {
                loading: false,
                isAuth: false
            }
        default:
            return state;
    }

}