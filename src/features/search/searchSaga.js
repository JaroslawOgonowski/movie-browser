import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getSearchMoviesList, getSearchPeopleList } from "./getSearch";
import { fetchSearchMoviesList, fetchSearchMoviesListError, fetchSearchMoviesListSuccess, fetchSearchPeopleList, fetchSearchPeopleListError, fetchSearchPeopleListSuccess } from "./searchSlice";

function* fetchSearchMoviesListHandler(action) {
  const { query, page } = action.payload
  if (query === null || page === null) return
  try {
    const searchMoviesList = yield call(getSearchMoviesList, query, page);
    yield delay(500);
    yield put(fetchSearchMoviesListSuccess(searchMoviesList));
  }
  catch (error) {
    yield put(fetchSearchMoviesListError());
  }
};

function* fetchSearchPeopleListHandler(action) {
  const { query, page } = action.payload
  if (query === null || page === null) return
  try {
    const searchPeopleList = yield call(getSearchPeopleList, query, page);
    yield delay(500);
    yield put(fetchSearchPeopleListSuccess(searchPeopleList));
  }
  catch (error) {
    yield put(fetchSearchPeopleListError());
  }
};

export function* searchSaga() {
  yield takeLatest(fetchSearchPeopleList, fetchSearchPeopleListHandler);
  yield takeLatest(fetchSearchMoviesList, fetchSearchMoviesListHandler);
}