import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import matchReducer from "./matchReducer";
import matchSaga from "./matchSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([matchSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ matchState: matchReducer });

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
