import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';

export type Socket = ReturnType<typeof io.connect>;

export const createSocketChannel = (socket: Socket) =>
  eventChannel(emit => {
    console.log(socket);

    const handler = (event: any) => {
      debugger;
      emit(event);
    };

    socket.on('enter waiting room success', handler);

    return () => {
      socket.disconnect();
    };
  });
