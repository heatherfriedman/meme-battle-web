import { fork } from 'redux-saga/effects';
import { watchSaga as socketWatchSaga } from '../sockets/watchSaga';
import { watchSaga as loginWatchSaga } from '../login/watchSaga';

export function* rootSaga() {
  yield fork(socketWatchSaga);
  yield fork(loginWatchSaga);
}
