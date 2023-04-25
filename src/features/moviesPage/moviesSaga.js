import { call, put, takeLatest } from "redux-saga/effects"
import { getMoviesList } from "../search/getSearch";
import { fetchMoviesList, fetchMoviesListError, fetchMoviesListSuccess } from "./moviesSlice";

function* fetchMoviesListHandler() {
    try {
    const moviesList = yield call(getMoviesList);    
     yield put(fetchMoviesListSuccess(moviesList));

  }
  catch (error) {
    yield put(fetchMoviesListError());   
    yield call(alert, "Błąd pobierania, spróbuj ponownie lub sprawdź połączenie z internetem")
  }
};

export function* moviesSaga() {
  yield takeLatest(fetchMoviesList.type, fetchMoviesListHandler);
}