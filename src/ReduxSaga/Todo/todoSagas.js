import { call, put, takeLatest } from "redux-saga/effects";
import { addTodoAPI, deleteTodoAPI, fetchTodosAPI, updateTodoAPI } from "./todoService";
import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  DELETE_TODOS_FAILURE,
  DELETE_TODOS_REQUEST,
  DELETE_TODOS_SUCCESS,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  fetchTodoFailure,
  fetchTodoSuccess,
  UPDATE_TODOS_FAILURE,
  UPDATE_TODOS_REQUEST,
  UPDATE_TODOS_SUCCESS,
} from "./todoAction";

function* fetchTodoSaga() {
  try {
    const response = yield call(fetchTodosAPI);
    // yield put(fetchTodoSuccess(response.data));
    yield put({ type: FETCH_TODOS_SUCCESS, payload: response });
  } catch (error) {
    // yield put(fetchTodoFailure(error.message));
    yield put({ type: FETCH_TODOS_SUCCESS, payload: error.message });
  }
}

function* addTodoSaga(action) {
  try {
    const response = yield call(addTodoAPI, action.payload);
    yield put({ type: ADD_TODOS_SUCCESS, payload: response });
    yield call(fetchTodoSaga)
  } catch (error) {
    yield put({ type: ADD_TODOS_FAILURE, payload: error.message });
  }
}


function* deleteTodoSaga(action) {
  try {
    const response = yield call(deleteTodoAPI, action.payload);
    yield put({type : DELETE_TODOS_SUCCESS, payload : response});
    yield call(fetchTodoSaga)
  } catch (error) {
    yield put({type : DELETE_TODOS_FAILURE, payload : error.message});
  }
}

function* updateTodoSaga(action) {
  try {
    const response = yield call(updateTodoAPI, action.payload);
    yield put({type : UPDATE_TODOS_SUCCESS, payload : response});  
    yield call(fetchTodoSaga)
  } catch(error){
    yield put({type : UPDATE_TODOS_FAILURE, payload : error.message});
  }
}

export default function* allSagas() {
  yield takeLatest(FETCH_TODOS_REQUEST, fetchTodoSaga);
  yield takeLatest(ADD_TODOS_REQUEST, addTodoSaga);
  yield takeLatest(DELETE_TODOS_REQUEST, deleteTodoSaga);
  yield takeLatest(UPDATE_TODOS_REQUEST, updateTodoSaga);
}
