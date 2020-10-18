import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';

export type Socket = ReturnType<typeof io.connect>;

export const createSocketChannel = (socket: Socket) =>
  eventChannel(emit => {
    console.log(socket);

    const handler = (event: any) => {
      emit(event);
    };

    socket.on('thanks lol', handler);
    socket.on('', handler);

    return () => {
      socket.disconnect();
    };
  });
