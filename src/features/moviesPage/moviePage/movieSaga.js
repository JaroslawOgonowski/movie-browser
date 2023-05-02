import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getMovieByID } from "./getMovieByID";
import { fetchMovieById, fetchMovieByIdError, fetchMovieByIdSuccess } from "./movieSlice";

function* fetchMovieByIDHandler({ payload }) {
  try {
    const movieInfo = yield call(getMovieByID, payload)
    yield delay(300);
    yield put(fetchMovieByIdSuccess(movieInfo));
  }
  catch (error) {
    yield put(fetchMovieByIdError());
    yield call(alert, "Download failed, please try again or check your internet connection")
  }
};

export function* movieSaga() {
  yield takeLatest(fetchMovieById, fetchMovieByIDHandler);
};