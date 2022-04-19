import { takeLatest } from "@redux-saga/core/effects";
import { USER_TYPE } from "../actions/userActions";
import { sagaUser } from "../sagas/sagaUser";

export function* watcherUser() {
    yield takeLatest(USER_TYPE.request, sagaUser);
}