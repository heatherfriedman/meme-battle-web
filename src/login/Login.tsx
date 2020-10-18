import React, {
  FC,
  useCallback,
  useState,
  ChangeEvent,
  FormEvent,
} from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
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

  const isEnteringWaitingRoom = useSelector(
    state => state.login.isEnteringWaitingRoom,
  );
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [],
  );

  const handleFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(actions.enterWaitingRoomStart({ name }));
    },
    [dispatch, name],
  );

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Label>Username:</Label>
        <Input value={name} onChange={handleOnChange} />
        {!isEnteringWaitingRoom && <SubmitButton />}
        {isEnteringWaitingRoom && <div>LOADING...</div>}
      </Form>
    </Container>
  );
};
