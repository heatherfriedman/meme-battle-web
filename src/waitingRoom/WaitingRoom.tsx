import React, { FC, useCallback, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { push } from 'connected-react-router';

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
  const dispatch = useDispatch();
  const username = useSelector(state => state.login.username);
  const handleReadySubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(push('/main-game'));
  }, []);
  return (
    <Container>
      {username} is waiting!
      <Form onSubmit={handleReadySubmit}>
        Ready?
        <SubmitButton />
      </Form>
    </Container>
  );
};
