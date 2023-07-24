import { put, takeEvery } from "redux-saga/effects";
import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILED, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "./constant";
import axios from "axios";

function* signup(action) {
  const { payload, onSuccess } = action;
  try {
    const result = yield axios.post("https://reqres.in/api/register", payload);
    yield put({ type: SIGNUP_SUCCESS, payload: result });
    onSuccess();
  } catch (error) {
    yield put({ type: SIGNUP_FAILED, payload: error });
  }
}

function* login(action) {
    const { payload, onSuccess } = action;
    try {
      const result = yield axios.post("https://reqres.in/api/login", payload);
      yield put({ type: LOGIN_SUCCESS, payload: result });
      localStorage.setItem('auth', JSON.stringify(result.data));
      onSuccess();
    } catch (error) {
      yield put({ type: LOGIN_FAILED, payload: error });
    }
  }

function* authSaga() {
  yield takeEvery(SIGNUP, signup);
  yield takeEvery(LOGIN, login)
}
export default authSaga;
