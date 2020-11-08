import { Socket } from '../sockets/socket';
import { actions } from './slice';
import { SocketHandler } from '../sockets/SocketHandler';

export const subscribeToSocketHandler = (
  socket: Socket,
  handler: SocketHandler,
) => {
  socket.on(actions.enterWaitingRoomSuccess.type, handler);
  socket.on(actions.enterWaitingRoomFailure.type, handler);
};
