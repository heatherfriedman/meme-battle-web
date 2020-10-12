import React, { FC, useCallback, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { push } from 'connected-react-router';
import { actions } from './slice';

const Container = styled.div`
  color: black;
  background-color: lightblue;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;
const Input = styled.input``;
const SubmitButton = styled.input.attrs({
  type: 'submit',
})``;

interface Props {}

export const Login: FC<Props> = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(actions.logIn({ username: name }));
      console.log("form submitted per Alex's request");
      dispatch(push('/waiting-room'));
    },
    [dispatch, name],
  );

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Label>Name:</Label>
        <Input value={name} onChange={handleOnChange} />
        <SubmitButton />
      </Form>
    </Container>
  );
};
