import { all } from "redux-saga/effects";
import { localStorageSaga } from "./localStorageSaga";

export default function* rootSaga() {
  yield all([
    localStorageSaga()
  ]);
};
