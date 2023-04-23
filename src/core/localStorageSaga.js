import { call, takeEvery, select } from "redux-saga/effects"
import { selectState } from "./generalSlice";
import { saveStateInLocalStorage } from "./localStorageState";

function* saveTasksInLocalStorageHandler() {
  const generalState = yield select(selectState);
  yield call(saveStateInLocalStorage, generalState);
};

export function* localStorageSaga() {
  yield takeEvery("*", saveTasksInLocalStorageHandler);
};