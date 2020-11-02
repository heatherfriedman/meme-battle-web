import { put, take } from 'redux-saga/effects';
import { sendSocket } from '../sockets/actions';
import { Actions } from './slice';

export function* enterWaitingRoomSaga(
  action: Actions['enterWaitingRoomStart'],
) {
  debugger;

  // 1) send a socket to the server containing the username we just entered
  yield put(
    sendSocket({
      event: 'enter waiting room',
      eventPayload: {
        username: action.payload.name,
      },
    }),
  );

  const { payload } = yield take([
    'enter waiting room success',
    'enter waiting room failure',
  ]);

  console.log(payload);

  debugger;

  // 2) wait for the server to respond... it responds with a socket event with a new User
  // 3) when we hear the socket response, we dispatch an action to update our UI
}
