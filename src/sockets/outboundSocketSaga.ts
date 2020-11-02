import { take, apply } from 'redux-saga/effects';
import { sendSocket } from './actions';
import { socket } from './socket';

export function* outboundSocketSaga() {
  while (true) {
    try {
      const action = yield take(sendSocket);
      debugger;
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
