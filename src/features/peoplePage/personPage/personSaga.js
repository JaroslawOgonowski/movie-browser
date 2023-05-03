import { call, delay, put, takeLatest } from "redux-saga/effects"
import { fetchPersonById, fetchPersonByIdError, fetchPersonByIdSuccess } from "./personSlice";
import { getPersonByID } from "./getPersonByID";


function* fetchPersonByIDHandler({ payload }) {
  try {
    const personInfo = yield call(getPersonByID, payload);
    yield delay(300);
    yield put(fetchPersonByIdSuccess(personInfo));
  }
  catch (error) {
    yield put(fetchPersonByIdError());
    yield call(alert, "Download failed, please try again or check your internet connection")
  }
};

export function* personSaga() {
  yield takeLatest(fetchPersonById, fetchPersonByIDHandler);
};