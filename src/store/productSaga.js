import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
import { put, takeEvery } from "redux-saga/effects";

function* getProduct() {
  let result = yield fetch("http://localhost:4000/users");
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, payload: result.data });
}

function* productSaga() {
  console.log('test')
  yield takeEvery(PRODUCT_LIST, getProduct);
}

export default productSaga;
