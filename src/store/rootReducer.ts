import { combineReducers } from '@reduxjs/toolkit';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { name as loginName, reducer as loginReducer } from '../login/slice';

export const createRootReducer = (history: History) =>
  combineReducers({
    [loginName]: loginReducer,
    router: connectRouter(history),
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
