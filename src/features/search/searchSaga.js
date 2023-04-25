import { call, put, takeLatest } from "redux-saga/effects"
import { getSearchMoviesList } from "./getSearch";
import { fetchMoviesList, fetchMoviesListError, fetchMoviesListSuccess } from "./searchSlice";

function* fetchMoviesListHandler({payload}) {
  try {
    const searchMoviesList = yield call(getSearchMoviesList, payload)
    yield put(fetchMoviesListSuccess(searchMoviesList));

  }
  catch (error) {
    yield put(fetchMoviesListError());
    yield call(alert, "Błąd pobierania, spróbuj ponownie lub sprawdź połączenie z internetem")
  }
};

export function* searchSaga() {
  yield takeLatest(fetchMoviesList, fetchMoviesListHandler);
}