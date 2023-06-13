import { delay, put, takeEvery } from "redux-saga/effects";
import { increment } from "./counterState";
import { createAction } from "@reduxjs/toolkit";

const counter = new Map([
  ["IncrementAsync", "INCREMENT_ASYNC"],
  ["DecrementAsync", "DECREMENT_ASYNC"],
]);

export function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}

function* watchIncrementAsync() {
  yield takeEvery(counter.get("IncrementAsync"), incrementAsync);
}

function* counterSaga() {
  yield watchIncrementAsync();
}

export default counterSaga;

export const sagaActions = {
  incrementAsync: createAction(counter.get("IncrementAsync")),
  decrementAsync: createAction(counter.get("DecrementAsync")),
};
