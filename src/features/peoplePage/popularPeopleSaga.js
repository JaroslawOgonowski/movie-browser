import { call, put, takeLatest } from "redux-saga/effects"
import { getPopularPeople } from "./getPopularPeople";
import { fetchPopularPeople, fetchPopularPeopleError, fetchPopularPeopleSuccess } from "./popularPeopleSlice";

function* fetchPopularPeopleHandler() {
  try {
    const popularPeopleList = yield call(getPopularPeople)
    yield put(fetchPopularPeopleSuccess(popularPeopleList));
  }
  catch (error) {
    yield put(fetchPopularPeopleError());
    yield call(alert, "Download failed, please try again or check your internet connection")
  }
};

export function* popularPeopleSaga() {
  yield takeLatest(fetchPopularPeople, fetchPopularPeopleHandler);
};