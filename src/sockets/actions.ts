import { createAction } from '@reduxjs/toolkit';

export const sendSocket = createAction<{
  event: string;
  eventPayload: any;
}>('SEND_SOCKET');
