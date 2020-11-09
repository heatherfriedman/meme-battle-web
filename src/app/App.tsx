import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { Login } from '../login/Login';
import { store } from '../store/store';
import { history } from '../store/history';
import { GlobalStyles } from './GlobalStyles';
import { WaitingRoom } from '../waitingRoom/WaitingRoom';

export const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Router history={history}>
      <Switch>
        <Route path='/game-room'>HERE IS THE MAIN GAME</Route>
        <Route path='/waiting-room'>
          <WaitingRoom />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
