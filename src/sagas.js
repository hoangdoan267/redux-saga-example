import { delay } from 'redux-saga'
import { put, takeEvery, all, takeLatest, fork, call } from 'redux-saga/effects'
import * as types from './action-types'
import { getData } from './api'
export function* fetchData() {
  try {
    const data = yield call(getData)
    yield delay(1000)

    yield put({
      type: types.FETCH_DATA_SUCCESS,
      payload: { data: data.movies }
    })
  } catch (e) {
    yield put({ type: types.FETCH_DATA_FAILED })
  }
}

export function* watchFetchData() {
  yield takeLatest(types.FETCH_DATA, fetchData)
}

export default function* rootSaga() {
  yield all([watchFetchData()])
}
