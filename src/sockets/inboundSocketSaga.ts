import { call, take, put } from 'redux-saga/effects';
import { createSocketChannel } from './createSocketChannel';
import { socket } from './socket';

export function* inboundSocketSaga() {
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      const receivedSocketPayload = yield take(socketChannel);
      const { type, payload } = receivedSocketPayload;
      yield put({ type, payload });
    } catch (error) {
      console.error('Error receiving socket:', error);
    }
  }
}
