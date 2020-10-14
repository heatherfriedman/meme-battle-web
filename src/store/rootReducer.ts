import { combineReducers } from '@reduxjs/toolkit';
import { name as loginName, reducer as loginReducer } from '../login/slice';

export const rootReducer = combineReducers({
  [loginName]: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
