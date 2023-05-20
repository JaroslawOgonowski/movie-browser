import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getCrewByID, getMovieByID } from "./getMovieByID";
import { fetchMovieById, fetchMovieByIdError, fetchMovieByIdSuccess } from "./movieSlice";

function* fetchMovieByIDHandler({ payload }) {
  try {
    const movieDescription = yield call(getMovieByID, payload);
    if (movieDescription.success === false && movieDescription.ststus_code === 404) {
      yield put(fetchMovieByIdError("Movie not found"));
      return;
    }
    const movieCrew = yield call(getCrewByID, payload);
    const movieInfo = {
      movieDescription: movieDescription,
      movieCrew: movieCrew
    };
    yield delay(300);
    yield put(fetchMovieByIdSuccess(movieInfo));
  }
  catch (error) {
    yield put(fetchMovieByIdError());
  };
};

export function* movieSaga() {
  yield takeLatest(fetchMovieById, fetchMovieByIDHandler);
};