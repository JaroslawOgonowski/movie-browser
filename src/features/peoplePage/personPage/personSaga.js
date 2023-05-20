import { call, delay, put, takeLatest } from "redux-saga/effects"
import { fetchPersonById, fetchPersonByIdError, fetchPersonByIdSuccess } from "./personSlice";
import { getPersonByID, getPersonInMoviesByID } from "./getPersonByID";

function* fetchPersonByIDHandler({ payload }) {
  try {
    const personDescription = yield call(getPersonByID, payload);
    if (personDescription.success === false && personDescription.status_code === 404) {
      yield put(fetchPersonByIdError("Person not found"));
      return;
    }
    const personMovies = yield call (getPersonInMoviesByID, payload);
    const personInfo = {
      personDescription: personDescription,
      personMovies: personMovies
    }
    yield delay(300);
    yield put(fetchPersonByIdSuccess(personInfo));
  }
  catch (error) {
    yield put(fetchPersonByIdError());
  }
};

export function* personSaga() {
  yield takeLatest(fetchPersonById, fetchPersonByIDHandler);
};