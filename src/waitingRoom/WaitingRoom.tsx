import React, { FC, useCallback, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  color: black;
  background-color: lightblue;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const SubmitButton = styled.input.attrs({
  type: 'submit',
  value: 'Ready!',
})``;

export const WaitingRoom: FC = () => {
  const history = useHistory();
  const username = useSelector(state => state.login.user?.username);
  const handleReadySubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      history.push('/game-room');
    },
    [history],
  );
  return (
    <Container>
      {username}
      is waiting!
      <Form onSubmit={handleReadySubmit}>
        Ready?
        <SubmitButton />
      </Form>
    </Container>
  );
};
