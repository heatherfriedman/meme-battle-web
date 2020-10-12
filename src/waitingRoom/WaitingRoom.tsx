import React, { FC } from 'react';
import { useSelector } from 'react-redux';

export const WaitingRoom: FC = () => {
  const username = useSelector(state => state.login.username);
  return <div>{username}</div>;
};
