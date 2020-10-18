import { fork } from 'redux-saga/effects';

import {
  inboundSocketSaga,
  outboundSocketSaga,
} from '../sockets/sagas';

export function* rootSaga() {
  yield fork(inboundSocketSaga);
  yield fork(outboundSocketSaga);
}
