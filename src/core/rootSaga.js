import { all } from "redux-saga/effects";
import { localStorageSaga } from "./localStorageSaga";
import { searchSaga } from "../features/search/searchSaga";
import { popularMoviesSaga } from "../features/moviesPage/popularMoviesSaga";
import { popularPeopleSaga } from "../features/peoplePage/popularPeopleSaga";
import { movieSaga } from "../features/moviesPage/moviePage/movieSaga";

export default function* rootSaga() {
  yield all([
    localStorageSaga(),
    searchSaga(),
    popularMoviesSaga(),
    popularPeopleSaga(),
    movieSaga(),
  ]);
};
