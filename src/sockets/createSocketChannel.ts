import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { subscribeToSocketHandler as loginSubscribe } from '../login/subscribeToSocketHandler';
import { Socket } from './socket';
import { SocketHandler } from './SocketHandler';

const subscribes = [loginSubscribe];

export const createSocketChannel = (socket: Socket) =>
  eventChannel(emit => {
    console.log(socket);

    const handler: SocketHandler = event => {
      debugger;
      emit(event);
    };

    subscribes.forEach(subscribe =>
      subscribe(socket, handler),
    );

    return () => {
      socket.disconnect();
    };
  });
