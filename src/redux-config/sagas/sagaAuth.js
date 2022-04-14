import { put } from '@redux-saga/core/effects';
import { actionAuth } from '../actions/authActions';

export function* sagaAuth(action) {
    const { username, password } = action.payload
    
    if (username === password) {
        yield put(actionAuth.ok());
    } else {
        yield put(actionAuth.ko());
    }
    
}