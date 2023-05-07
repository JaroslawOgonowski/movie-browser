import { all } from "redux-saga/effects";
import { searchSaga } from "../features/search/searchSaga";
import { popularMoviesSaga } from "../features/moviesPage/popularMoviesSaga";
import { popularPeopleSaga } from "../features/peoplePage/popularPeopleSaga";
import { movieSaga } from "../features/moviesPage/moviePage/movieSaga";
import { personSaga } from "../features/peoplePage/personPage/personSaga";

export default function* rootSaga() {
  yield all([
    searchSaga(),
    popularMoviesSaga(),
    popularPeopleSaga(),
    movieSaga(),
    personSaga()
  ]);
};
