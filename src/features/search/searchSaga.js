import { call, put, takeLatest } from "redux-saga/effects"
import { getSearchMoviesList } from "./getSearch";
import { fetchSearchMoviesList, fetchSearchMoviesListError, fetchSearchMoviesListSuccess } from "./searchSlice";

function* fetchSearchMoviesListHandler({payload}) {
  try {
    const searchMoviesList = yield call(getSearchMoviesList, payload)
    yield put(fetchSearchMoviesListSuccess(searchMoviesList));

  }
  catch (error) {
    yield put(fetchSearchMoviesListError());
    yield call(alert, "Błąd pobierania, spróbuj ponownie lub sprawdź połączenie z internetem")
  }
};

export function* searchSaga() {
  yield takeLatest(fetchSearchMoviesList, fetchSearchMoviesListHandler);
}