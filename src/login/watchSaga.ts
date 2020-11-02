import { takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { enterWaitingRoomSaga } from './enterWaitingRoomSaga';

export function* watchSaga() {
  yield takeLatest(
    actions.enterWaitingRoomStart,
    enterWaitingRoomSaga,
  );
}
