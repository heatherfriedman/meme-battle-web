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
import { Style } from '../styles/Style';

const FORM_WIDTH = 300;

const JOIN_TAB = 'join';
const CREATE_TAB = 'create';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${Style.padding.larger}px;
  color: black;
  height: 100%;
`;

const Header = styled.h1`
  font-size: ${Style.fontSize.increased}rem;
  margin-bottom: ${Style.padding.large}px;
`;

const Form = styled.form`
  background-color: white;
  border-radius: ${Style.borderRadius.regular}px;
  box-shadow: ${Style.boxShadow.regular};
  padding: ${Style.padding.increased}px;
  display: flex;
  flex-direction: column;
  width: ${FORM_WIDTH}px;
`;

const Label = styled.label``;

const TabLabel = styled.label`
  color: grey;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

const TabLabelActive = styled.label`
  text-decoration: underline;
  color: black;
`;

const Input = styled.input`
  margin-bottom: ${Style.padding.regular}px;
`;
const SubmitButton = styled.input.attrs({
  type: 'submit',
})``;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
`;

interface Props {}

export const Login: FC<Props> = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [selectedTab, setSelectedTab] = useState(JOIN_TAB);

  const isEnteringWaitingRoom = useSelector(
    state => state.login.isEnteringWaitingRoom,
  );
  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleRoomChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRoom(e.target.value);
  }, []);

  const handleFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(
        `You are in "${selectedTab}" mode with username "${name}" and room name "${room}"!!`,
      );
      // dispatch(actions.enterWaitingRoomStart({ name }));
    },
    [name, room, selectedTab],
  );

  return (
    <Container>
      <Header>MEME BATTLE</Header>
      <Form onSubmit={handleFormSubmit}>
        {selectedTab === JOIN_TAB && (
          <>
            <Tabs>
              <TabLabelActive>Join Game</TabLabelActive>
              <TabLabel
                onClick={() => {
                  setSelectedTab(CREATE_TAB);
                }}
              >
                Create Game
              </TabLabel>
            </Tabs>
            <Label>Your Name</Label>
            <Input value={name} onChange={handleNameChange} />
            <Label>Room Name</Label>
            <Input onChange={handleRoomChange} />
            {!isEnteringWaitingRoom && <SubmitButton value='Join Game' />}
            {isEnteringWaitingRoom && <div>LOADING...</div>}
          </>
        )}
        {selectedTab === CREATE_TAB && (
          <>
            <Tabs>
              <TabLabel
                onClick={() => {
                  setSelectedTab(JOIN_TAB);
                }}
              >
                Join Game
              </TabLabel>
              <TabLabelActive>Create Game</TabLabelActive>
            </Tabs>
            <Label>Your Name</Label>
            <Input value={name} onChange={handleNameChange} />
            <Label>New Room Name</Label>
            <Input onChange={handleRoomChange} />
            {!isEnteringWaitingRoom && <SubmitButton value='Create Game' />}
            {isEnteringWaitingRoom && <div>LOADING...</div>}
          </>
        )}
      </Form>
    </Container>
  );
};
