import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Login } from '../login/Login';
import { store } from '../store/store';
import { GlobalStyles } from './GlobalStyles';
import { WaitingRoom } from '../waitingRoom/WaitingRoom';

export const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path='/game-room'>HERE IS THE MAIN GAME</Route>
        <Route path='/waiting-room'>
          <WaitingRoom />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);
