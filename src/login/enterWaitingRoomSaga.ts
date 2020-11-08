import { put, take } from 'redux-saga/effects';
import { Action } from '@reduxjs/toolkit';
import { sendSocket } from '../sockets/actions';
import { Actions, actions } from './slice';

export function* enterWaitingRoomSaga(
  action: Actions['enterWaitingRoomStart'],
) {
  // 1) send a socket to the server containing the username we just entered
  yield put(
    sendSocket({
      event: 'enter waiting room',
      eventPayload: {
        username: action.payload.name,
      },
    }),
  );

  const responseAction: Action = yield take([
    'login/enterWaitingRoomSuccess',
    'login/enterWaitingRoomFailure',
  ]);

  console.log(actions.enterWaitingRoomSuccess.type);
  debugger;
  if (
    actions.enterWaitingRoomSuccess.match(responseAction)
  ) {
    debugger;
    console.log('time to navigate to the waiting room');
  } else {
    console.error('whoops lol');
  }

  // 2) wait for the server to respond... it responds with a socket event with a new User
  // 3) when we hear the socket response, we dispatch an action to update our UI
}
