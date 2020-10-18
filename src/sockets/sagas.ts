import io from 'socket.io-client';
import { call, take, put, apply } from 'redux-saga/effects';
import { createSocketChannel } from './createSocketChannel';
import { sendSocket } from '../login/actions';

const socket = io.connect('http://localhost:3001');

export function* inboundSocketSaga() {
  const socketChannel = yield call(
    createSocketChannel,
    socket,
  );

  while (true) {
    try {
      const receivedSocketPayload = yield take(
        socketChannel,
      );
      const { type, payload } = receivedSocketPayload;
      yield put({ type, payload });
    } catch (error) {
      console.error('Error receiving socket:', error);
    }
  }
}

export function* outboundSocketSaga() {
  while (true) {
    try {
      const action = yield take(sendSocket);
      const { event, eventPayload } = action.payload;
      yield apply(socket, socket.emit, [
        event,
        eventPayload,
      ]);
    } catch (error) {
      console.error('Error sending socket:', error);
    }
  }
}
