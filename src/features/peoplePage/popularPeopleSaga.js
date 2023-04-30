import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getPopularPeople } from "./getPopularPeople";
import { fetchPopularPeople, fetchPopularPeopleError, fetchPopularPeopleSuccess } from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({ payload }) {
  try {
    const popularPeopleList = yield call(getPopularPeople, payload)
    yield delay(300)
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