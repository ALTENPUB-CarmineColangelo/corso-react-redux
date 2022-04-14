import { COUNT_TYPE } from "../actions/countActions";

const initialState = { count: 0 }
export const countReducer = (state = {...initialState}, action) => {
    
    switch (action.type) {
        case COUNT_TYPE.increment:
            return {
                count: state.count + action.payload
            }
        case COUNT_TYPE.decrement:
            return {
                count: state.count - action.payload
            }
        default:
            return state;
    }

}