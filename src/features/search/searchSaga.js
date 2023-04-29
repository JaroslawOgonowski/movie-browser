import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getSearchMoviesList, getSearchPeopleList } from "./getSearch";
import { fetchSearchMoviesList, fetchSearchMoviesListError, fetchSearchMoviesListSuccess, fetchSearchPeopleList, fetchSearchPeopleListError, fetchSearchPeopleListSuccess } from "./searchSlice";

function* fetchSearchMoviesListHandler({ payload }) {
  try {
    const searchMoviesList = yield call(getSearchMoviesList, payload)
    yield delay(500);
    yield put(fetchSearchMoviesListSuccess(searchMoviesList));
  }
  catch (error) {
    yield put(fetchSearchMoviesListError());
    yield call(alert, "Download failed, please try again or check your internet connection")
  }
};

function* fetchSearchPeopleListHandler({ payload }) {
  try {
    const searchPeopleList = yield call(getSearchPeopleList, payload)
    yield delay(500);
    yield put(fetchSearchPeopleListSuccess(searchPeopleList));
  }
  catch (error) {
    yield put(fetchSearchPeopleListError());
    yield call(alert, "Download failed, please try again or check your internet connection")
  }
};

export function* searchSaga() {
  yield takeLatest(fetchSearchPeopleList, fetchSearchPeopleListHandler);
  yield takeLatest(fetchSearchMoviesList, fetchSearchMoviesListHandler);
}