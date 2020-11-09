import { ExtractActions, createReducer } from '@reduxjs/toolkit';
import { User } from 'meme-battle-core';
import * as actions from './actions';

const name = 'login';

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

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.enterWaitingRoomStart, state => {
      state.isEnteringWaitingRoom = true;
    })
    .addCase(actions.enterWaitingRoomSuccess, (state, action) => {
      state.isEnteringWaitingRoom = false;
      state.user = action.payload.user;
    })
    .addCase(actions.enterWaitingRoomFailure, state => {
      state.isEnteringWaitingRoom = false;
      state.errorEnteringWaitingRoom = true;
    });
});

export { actions, reducer, name };
export type Actions = ExtractActions<typeof actions>;
