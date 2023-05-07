import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getSearchMoviesList, getSearchPeopleList } from "./getSearch";
import { fetchSearchMoviesList, fetchSearchMoviesListError, fetchSearchMoviesListSuccess, fetchSearchPeopleList, fetchSearchPeopleListError, fetchSearchPeopleListSuccess } from "./searchSlice";

function* fetchSearchMoviesListHandler(action) {
  const { query, page } = action.payload
  if (query === null || page === null) return
  else {
    try {
      const searchMoviesList = yield call(getSearchMoviesList, query, page);
      yield delay(500);
      yield put(fetchSearchMoviesListSuccess(searchMoviesList));
    }
    catch (error) {
      yield put(fetchSearchMoviesListError());
      yield call(alert, "Download failed, please try again or check your internet connection")
    }
  }
};

function* fetchSearchPeopleListHandler(action) {
  const { query, page } = action.payload
  if (query === null || page === null) return
  else {
    try {
      const searchPeopleList = yield call(getSearchPeopleList, query, page);
      yield delay(500);
      yield put(fetchSearchPeopleListSuccess(searchPeopleList));
    }
    catch (error) {
      yield put(fetchSearchPeopleListError());
      yield call(alert, "Download failed, please try again or check your internet connection")
    }
  }
};

export function* searchSaga() {
  yield takeLatest(fetchSearchPeopleList, fetchSearchPeopleListHandler);
  yield takeLatest(fetchSearchMoviesList, fetchSearchMoviesListHandler);
}