import io from 'socket.io-client';
import { call, take } from 'redux-saga/effects';
import { createSocketChannel } from './createSocketChannel';

export function* socketSaga() {
  const socket = io.connect('http://localhost:3001');
  const socketChannel = yield call(
    createSocketChannel,
    socket,
  );

  socket.emit('set username', 'Alex');

  while (true) {
    try {
      const payload = yield take(socketChannel);
      //   yield put(actions.setUsernameSuccess({ username: payload }))
      console.log('got socket response:', payload);
      debugger;
    } catch (error) {
      console.error('oops...', error);
    }
  }
}
