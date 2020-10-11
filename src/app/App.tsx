import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WaitingRoom } from '../home/WaitingRoom';
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path='/'>
            <WaitingRoom />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
