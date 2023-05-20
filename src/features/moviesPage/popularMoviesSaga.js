import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getPopularMovies } from "./getPopularMovies";
import { fetchPopularMovies, fetchPopularMoviesError, fetchPopularMoviesSuccess } from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload }) {
  try {
    const popularMoviesList = yield call(getPopularMovies, payload)
    yield delay(300);
    yield put(fetchPopularMoviesSuccess(popularMoviesList));
  }
  catch (error) {
    yield put(fetchPopularMoviesError());
  }
};

export function* popularMoviesSaga() {
  yield takeLatest(fetchPopularMovies, fetchPopularMoviesHandler);
};