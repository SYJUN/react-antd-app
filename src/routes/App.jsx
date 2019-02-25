import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Login from '../pages/login/Login';
import Routers from './Routers';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={Routers} />
      </Switch>
    </HashRouter>
  );
}

export default hot(module)(App);
