import { takeEvery, put, take } from 'redux-saga/effects';
import { actions, Actions } from './slice';
import { sendSocket } from './actions';

function* watchEnterWaitingRoomSaga() {
  yield takeEvery(
    actions.enterWaitingRoomStart,
    enterWaitingRoomSaga,
  );
}

function* enterWaitingRoomSaga(
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

  const { payload } = yield take([
    'enter waiting room success',
    'enter waiting room failure',
  ]);

  // 2) wait for the server to respond... it responds with a socket event with a new User
  // 3) when we hear the socket response, we dispatch an action to update our UI
}
