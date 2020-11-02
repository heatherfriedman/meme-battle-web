import { fork } from 'redux-saga/effects';
import { inboundSocketSaga } from './inboundSocketSaga';
import { outboundSocketSaga } from './outboundSocketSaga';

export function* watchSaga() {
  yield fork(inboundSocketSaga);
  yield fork(outboundSocketSaga);
}
