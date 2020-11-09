import { put, take } from 'redux-saga/effects';
import { Action } from '@reduxjs/toolkit';
import {
  enterWaitingRoomStart,
  enterWaitingRoomSuccess,
  enterWaitingRoomFailure,
} from 'meme-battle-core';
import { history } from '../store/history';
import { sendSocket } from '../sockets/actions';
import { Actions, actions } from './slice';

export function* enterWaitingRoomSaga(
  action: Actions['enterWaitingRoomStart'],
) {
  // 1) send a socket to the server containing the username we just entered
  yield put(
    sendSocket({
      event: enterWaitingRoomStart,
      eventPayload: {
        username: action.payload.name,
      },
    }),
  );

  const responseAction: Action = yield take([
    enterWaitingRoomSuccess,
    enterWaitingRoomFailure,
  ]);

  if (actions.enterWaitingRoomSuccess.match(responseAction)) {
    history.push('/waiting-room');
  } else {
    console.error('whoops lol');
  }

  // 2) wait for the server to respond... it responds with a socket event with a new User
  // 3) when we hear the socket response, we dispatch an action to update our UI
}
