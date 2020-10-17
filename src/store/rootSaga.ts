import { delay, fork, put, take } from 'redux-saga/effects';
import { actions, ValidName } from '../login/slice';
import { socketSaga } from '../socketSaga';

function* counterSaga() {
  const validNames: ValidName[] = [
    'alex',
    'heather',
    'sawyer',
    'luna',
    'tycho',
  ];
  let index = 0;
  let n = 1;
  while (true) {
    yield put(actions.incrementByN({ n }));
    yield put(
      actions.updateName({
        newName: validNames[index % validNames.length],
      }),
    );
    yield delay(1000);
    index += 1;
    n += 1;
  }
}

export function* rootSaga() {
  yield fork(counterSaga);
  yield fork(socketSaga);
}
