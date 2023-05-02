import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getCrewByID, getMovieByID } from "./getMovieByID";
import { fetchMovieById, fetchMovieByIdError, fetchMovieByIdSuccess } from "./movieSlice";

function* fetchMovieByIDHandler({ payload }) {
  try {
    const movieDescription = yield call(getMovieByID, payload);
    const movieCrew = yield call (getCrewByID, payload);
    const movieInfo = {
      movieDescription: movieDescription,  
      movieCrew: movieCrew
    };
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