import { all } from "redux-saga/effects";
import { localStorageSaga } from "./localStorageSaga";
import { searchSaga } from "../features/search/searchSaga";


export default function* rootSaga() {
  yield all([
    localStorageSaga(),
    searchSaga()
  ]);
};
