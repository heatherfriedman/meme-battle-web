import React, { FC, useCallback, useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
  const history = useHistory();
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
      history.push('/waiting-room');
    },
    [dispatch, history, name],
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
