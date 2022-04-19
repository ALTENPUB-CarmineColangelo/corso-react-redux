import { put, call } from '@redux-saga/core/effects';
import { apiUser } from '../../api/apiUser';
import { actionUser } from '../actions/userActions';

export function* sagaUser(action) {
    try {
        const result = yield call(apiUser, { id: action.payload});
        if (result) {
            yield put(actionUser.success(result));
        } else {
            throw new Error('Errore durante la apiUser');
        }
    } catch (e) {
        yield put(actionUser.error(e))
    }

}