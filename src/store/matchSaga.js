import { call, put, takeLatest } from "redux-saga/effects";
import { getMatches } from "../services/matchService";
import {
  FETCH_MATCHES_REQUEST,
  fetchMatchesSuccess,
  fetchMatchesFailure,
} from "./matchActions";

function* fetchMatchesSaga() {
  try {
    const matches = yield call(getMatches);
    yield put(fetchMatchesSuccess(matches));
  } catch (error) {
    yield put(fetchMatchesFailure(error.message));
  }
}

export default function* matchSaga() {
  yield takeLatest(FETCH_MATCHES_REQUEST, fetchMatchesSaga);
}
