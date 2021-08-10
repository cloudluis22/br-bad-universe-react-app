import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { MainScreen } from '../screens/MainScreen';
import { BrBaScreen } from '../screens/BrBaScreen';
import { BCSScreen } from '../screens/BCSScreen';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainScreen} />
        <Route exact path='/brba' component={BrBaScreen} />
        <Route exact path='/bcs' component={BCSScreen} />

        <Redirect to='/' />
      </Switch>
    </Router>
  );
};
