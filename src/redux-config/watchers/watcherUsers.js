import { takeLatest } from "@redux-saga/core/effects";
import { USERS_TYPE } from "../actions/usersActions";
import { sagaUsers } from "../sagas/sagaUsers";

export function* watcherUsers() {
    yield takeLatest(USERS_TYPE.request, sagaUsers);
}