import { takeEvery, call, put } from "redux-saga/effects";

export function* watcherSaga() {
  console.log("it works 2");
  yield takeEvery("CLICK", workerSaga);
}

export function* workerSaga() {
  const data = yield call(getCustomers);
  //yield put({ type: "GET_POSTS", payload: data });
  console.log(data);
}

export default function* rootSaga() {
  console.log("it works");
  yield watcherSaga();
}

async function getCustomers() {
    const request = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await request.json();
    return data
}