import { createAction } from '@reduxjs/toolkit';
import * as events from 'meme-battle-core/lib/login';
import { User } from 'meme-battle-core/lib';

export const enterWaitingRoomStart = createAction<{ name: string }>(
  events.enterWaitingRoomStart,
);

export const enterWaitingRoomSuccess = createAction<{ user: User }>(
  events.enterWaitingRoomSuccess,
);

export const enterWaitingRoomFailure = createAction(
  events.enterWaitingRoomFailure,
);
