import { takeLatest } from "@redux-saga/core/effects";
import { AUTH_TYPE } from "../actions/authActions";
import { sagaAuth } from "../sagas/sagaAuth";

export function* watcherAuth() {
    yield takeLatest(AUTH_TYPE.request, sagaAuth);
}