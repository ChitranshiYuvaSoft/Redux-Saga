import { all } from "redux-saga/effects";
import allSagas from "./Todo/todoSagas";

export default function* rootSaga(){
  yield all([allSagas()]);
}