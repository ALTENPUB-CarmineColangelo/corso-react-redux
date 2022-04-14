import { put, call } from '@redux-saga/core/effects';
import { apiUsers } from '../../api/apiUsers';
import { actionUsers } from '../actions/usersActions';

export function* sagaUsers(action) {
    try {
        const result = yield call(apiUsers);
        if (result) {
            yield put(actionUsers.success(result));
        } else {
            throw new Error('Errore durante la apiUsers');
        }
    } catch (e) {
        yield put(actionUsers.error(e))
    }

}