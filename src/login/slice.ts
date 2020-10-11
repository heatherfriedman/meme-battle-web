import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialLoginState {
  username: string | null;
}

const initialState: InitialLoginState = { username: null };

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<{ username: string }>) {
      state.username = action.payload.username;
    },
  },
});

export const { actions, reducer, name } = slice;
