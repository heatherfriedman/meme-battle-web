import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({
  context: {
    history,
  },
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
