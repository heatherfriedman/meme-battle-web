import io from 'socket.io-client';

export const socket = io.connect('http://localhost:3001');

export type Socket = typeof socket;
