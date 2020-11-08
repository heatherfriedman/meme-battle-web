import { createSlice, PayloadAction, ExtractActions } from '@reduxjs/toolkit';
import { User } from 'meme-battle';

interface InitialLoginState {
  user: User | null;
  isEnteringWaitingRoom: boolean;
  errorEnteringWaitingRoom: boolean;
}

const initialState: InitialLoginState = {
  user: null,
  isEnteringWaitingRoom: false,
  errorEnteringWaitingRoom: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    enterWaitingRoomStart(state, _action: PayloadAction<{ name: string }>) {
      state.isEnteringWaitingRoom = true;
    },
    enterWaitingRoomSuccess(state, action: PayloadAction<{ user: User }>) {
      debugger;
      state.isEnteringWaitingRoom = false;
      state.user = action.payload.user;
    },
    enterWaitingRoomFailure(state) {
      state.isEnteringWaitingRoom = false;
      state.errorEnteringWaitingRoom = true;
    },
  },
});

export const { actions, reducer, name } = slice;
export type Actions = ExtractActions<typeof actions>;
