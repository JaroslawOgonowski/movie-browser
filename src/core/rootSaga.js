import { all } from "redux-saga/effects";
import { localStorageSaga } from "./localStorageSaga";
import { moviesSaga } from "../features/moviesPage/moviesSaga";

export default function* rootSaga() {
  yield all([
    localStorageSaga(),
    moviesSaga()
  ]);
};
