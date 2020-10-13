import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Login } from '../login/Login';
import { store, history } from '../store/store';
import { GlobalStyles } from './GlobalStyles';
import { WaitingRoom } from '../waitingRoom/WaitingRoom';

export const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/main-game'>HERE IS THE MAIN GAME</Route>
        <Route path='/waiting-room'>
          <WaitingRoom />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
